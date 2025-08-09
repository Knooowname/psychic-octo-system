import crypto from "crypto";
import config from "../../wt_config/config.json";
import { dateTimeToSQL, dateTimeToStr } from "./DateStr";
import { DBase, getDB } from "./DBase";

export class User {
    db: DBase;
    args: any;

    constructor(_args: any) {
        this.db = getDB();
        this.args = _args;
    }


    //Добавление кода сессии пользователя 
    async insertSessionCode() {
        var pass = crypto
            .createHmac("sha256", config.crypto_code)
            .update(this.args.password)
            .digest("hex");
        var db_response = await this.db.query(
            "SELECT id FROM users WHERE login = '" +
            this.args.login +
            "' and password = '" +
            pass +
            "'"
        );

        if (db_response.rows.length !== 0) {
            const date = new Date();
            date.setDate(date.getDate() + 15);
            // получаем id для записи
            var id_q = await this.db.query("SELECT max(id) FROM user_sess");
            var id: number = 0;
            //если записей в Sessions не было то присваеваем 1
            if (id_q.rows[0].max === null) {
                id++;
            }
            //иначе к последней записи добавляем 1
            else {
                id = parseInt(id_q.rows[0].max) + 1;
            }

            var sess = crypto
                .createHmac("sha256", config.crypto_code)
                .update(
                    id +
                    "_" +
                    dateTimeToSQL(date) +
                    "_" +
                    db_response.rows[0].selectiduser
                )
                .digest("hex");

            //записываем в Sessions
            await this.db.query(
                "INSERT INTO user_sess (id, uid, sess_code) " +
                "VALUES (" +
                id +
                ", " +
                db_response.rows[0].id +
                ", '" +
                sess + "')"
            );
            return sess;
        }
    }

    //Добавление нового пользователя  
    async insertUser() {
        var check_user = await this.selectUser();
        if (check_user[0] === undefined || check_user.length === 0) {
            var pass = crypto
                .createHmac("sha256", config.crypto_code)
                .update(this.args.password)
                .digest("hex");
            var repass = crypto
                .createHmac("sha256", config.crypto_code)
                .update(this.args.repassword)
                .digest("hex");

            if (pass === repass) {

                var db_response = await this.db.query(
                    "INSERT INTO users (firstname, lastname, login, password)" +
                    "VALUES(\'" + this.args.firstname + "\', \'" + this.args.lastname + "\', \'" + this.args.login + "\', \'" + pass + "\')" +
                    "RETURNING id"
                );
                return db_response.rows;
            }
            else {
                return [];
            }
        }
    }

    //получение данных пользователя который авторизовывается 
    async selectUser() {
        if (this.args.user_sess === undefined) {
            var pass = crypto
                .createHmac("sha256", config.crypto_code)
                .update(this.args.password)
                .digest("hex");
            var db_response = await this.db.query('select users.id, users.login, users.firstname, users.lastname from users where login = \'' + this.args.login + '\' and password = \'' + pass + '\'');
            return db_response.rows;
        }
        else {
            var db_response = await this.db.query(
                "SELECT " +
                "users.id, users.login, users.firstname, users.lastname " +
                "FROM users INNER JOIN user_sess ON " +
                "users.id=user_sess.uid WHERE user_sess.sess_code = '" +
                this.args.user_sess +
                "'"
            );
            console.log(db_response.rows)
            return db_response.rows;
        }
    }

    //Удаление кода сессии пользователя
    async deleteSessionCode() {
        await this.db.query(
            "DELETE FROM user_sess WHERE sess_code = '" + this.args.user_sess + "'"
        );
    }

    //получение всех пользователей
    //для комбобоксов и записей в таблицы
    async selectAllUser() {
        var db_response = await this.db.query("select * from users");
        return db_response.rows;
    }

    //сброс пароля
    async recoverPass() {

        var pass = crypto
            .createHmac("sha256", config.crypto_code)
            .update(this.args.password)
            .digest("hex");
        var db_response = await this.db.query("update users set password = \'" + pass + "\' " +
            " where login = \'" + this.args.login + "\' and firstname = \'" + this.args.firstname + "\' " +
            " returning id");

        return db_response.rows;
    }
}