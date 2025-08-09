import { DBase, getDB } from "./DBase";
import crypto from "crypto";
import config from "../config.json";
import { dateTimeToSQL, dateTimeToStr } from "./DateStr";
import nodemailer from "nodemailer";

export class Users {
    db: DBase;
    args: any;
    sess_code: string;
    constructor(_args: any, _sess_code: string) {
        this.db = getDB();
        this.args = _args;
        this.sess_code = _sess_code;
    }


    //Регистрация пользователя --ВЫПОЛНЕНО
    async regist() {
        var checkUser = await this.auth();
        if (checkUser === undefined) {
            // Генерация зашифрованного пароля
            var pass = crypto
                .createHmac("sha256", config.crypto_code)
                .update(this.args.password)
                .digest("hex");

            // Генерация зашифрованного кода подтверждение почты
            var mail_code = crypto
                .createHmac("sha256", config.crypto_code)
                .update("_" + this.args.email)
                .digest("hex");

            // Генерация зашифрованного кода для смены пароля когда пользователь забыл пароль
            var re_pass_code = crypto
                .createHmac("sha256", config.crypto_code)
                .update("_" + pass)
                .digest("hex");

            var db_response = await this.db.query("INSERT INTO users (last_name, first_name, email, password, phone, address, " +
                "role_id, mail_code, act_mail, re_password_code, deleted, data_deleted, created_at) " +
                " VALUES ('" + this.args.lastname + "', '" + this.args.firstname + "', '" + this.args.email + "', " +
                "'" + pass + "', '" + this.args.phone + "', '" + this.args.address + "', '" + this.args.role_id + "', " +
                "'" + mail_code + "', false, '" + re_pass_code + "' , false, null, '" + dateTimeToSQL(new Date(Date.now())) + "') RETURNING id");

            if (this.args.role_id !== '2' || this.args.role_id !== '1') { this.sendMailToConfirm() }

            return db_response.rows;
        }
        else { return null }
    }

    //Удаление аккаунта манагера 
    async deleteManager(){
        var db_response = await this.db.query("DELETE FROM users WHERE id = " + this.args.id + " RETURNING id")
        return db_response.rows[0]

    }
    

    //Авторизация по логину и паролю или по коду сессии --ВЫПОЛНЕНО
    async auth() {
        if (this.sess_code === "") {
            //Шифрование пароля для сверки с базой данных
            var pass = crypto
                .createHmac("sha256", config.crypto_code)
                .update(this.args.password)
                .digest("hex");

            var db_response = null;
            db_response = await this.db.query(
                "SELECT id, last_name, first_name, email, phone, address, role_id, deleted FROM users WHERE email ='" +
                this.args.email +
                "' and password = '" +
                pass +
                "'"
            );
        }
        else {
            db_response = await this.db.query("SELECT users.id, last_name, first_name, email, phone, address, role_id, deleted FROM users " +
                " JOIN user_sess ON users.id = user_sess.user_id  WHERE user_sess.sess_code = '" + this.sess_code + "'");
        }
        return db_response.rows[0]
    }

    //Создание кода сессии авторизации --ВЫПОЛНЕНО
    async addSessCode() {
        var pass = crypto
            .createHmac("sha256", config.crypto_code)
            .update(this.args.password)
            .digest("hex");

        var db_response = await this.db.query(
            "SELECT id FROM users WHERE email = '" +
            this.args.email +
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
                .update(id + "_" + dateTimeToSQL(date) + "_" + db_response.rows[0].selectiduser)
                .digest("hex");

            //записываем в Sessions
            await this.db.query(
                "INSERT INTO user_sess (id, user_id, sess_code) " +
                "VALUES (" + id + ", " + db_response.rows[0].id + ", '" + sess + "')"
            );
            return sess;
        }
    }

    //удаление кода сессии авторизации --ВЫПОЛНЕНО
    async deleteSessCode() {
        var db_response = await this.db.query("DELETE FROM user_sess WHERE sess_code = '" + this.sess_code + "' RETURNING id");
        return db_response.rows[0]
    }

    //Отправка сообщения на подтверждение почты --ВЫПОЛНЕНО
    async sendMailToConfirm() {

        var mail_code = crypto
            .createHmac("sha256", config.crypto_code)
            .update("_" + this.args.email)
            .digest("hex");


        await this.transporter.sendMail({
            from: config.config_mail.auth.user,
            //Получение email от пользователя
            to: this.args.email,
            subject: "Подтвержденние электронной почты",
            //Отправка ссылки с кодом для подтверждения
            html:
                'Данное сообщение отправлено для подтверждения почтового ящика на сайте КрафтЛазер <h1><a href="http://' +
                config.server_config.host +
                ":" +
                config.server_config.port +
                "/confirm_mail?code= " +
                mail_code +
                '">Нажмите на данное сообщение для подтверждения почты</a></h1>',
        });

    }

    //Подтверждение почты после нажатия на ссылку в почте  --ВЫПОЛНЕНО
    async confirmMail() {
        var db_response = await this.db.query("UPDATE USERS SET act_mail = true WHERE mail_code = '" + this.args.mail_code + "' RETURNING id");
        return db_response.rows[0];
    }

    //Отправка сообщения на восстановление пароля --ВЫПОЛНЕНО
    async sendMailToRecoverPass() {
        //проверка на наличие почты и кода сброса пароля
        var db_response = await this.db.query(
            "SELECT re_password_code FROM users WHERE email= '" +
            this.args.email + "'"
        );
        if (db_response.rows[0] !== undefined) {
            await this.transporter.sendMail({
                from: config.config_mail.auth.user,
                //Получение email от пользователя
                to: this.args.email,
                subject: "Восстановление пароля",
                //Отправка ссылки с кодом для подтверждения
                html:
                    'Данное отправлено для сброса пароля на сайте КрафтЛазер. <h1><a href="http://' +
                    config.server_config.host +
                    ":" +
                    config.server_config.port +
                    "/reset_pass?code= " +
                    db_response.rows[0].re_password_code + " mail=" + this.args.email +
                    ' ">Нажмите на данное сообщение для сброса пароля </a></h1>',
            });
        }
        return db_response.rows[0]

    }


    //Смена пароля после нажатия на ссылку в письме и смена кода сброса пароля --ВЫПОЛНЕНО
    async recoverPass() {
        var pass = crypto
            .createHmac("sha256", config.crypto_code)
            .update(this.args.password)
            .digest("hex");

        // Генерация зашифрованного кода для смены пароля когда пользователь забыл пароль
        var re_pass_code = crypto
            .createHmac("sha256", config.crypto_code)
            .update("_" + pass)
            .digest("hex");

        var db_response = await this.db.query(
            "SELECT re_password_code FROM users WHERE email ='" +
            this.args.email +
            "'"
        );

        if (db_response.rows[0] !== undefined && db_response.rows[0].re_password_code === this.args.code) {
            db_response = await this.db.query("UPDATE users SET password = '" +
                pass + "', re_password_code = '" + re_pass_code + "' WHERE email = '" +
                this.args.email + "' RETURNING id");
            return db_response.rows[0]
        }
        else { return db_response.rows[0] = undefined }
    }

    //Изменение данных о пользователе 
    async changeDataUser() {
        var db_response = await this.db.query("UPDATE users SET last_name = '" + this.args.lastname + "'," +
            " first_name = '" + this.args.firstname + "', phone = '" + this.args.phone + "', " +
            "address = '" + this.args.address + "' WHERE email = '" + this.args.email + "' RETURNING id");
        return db_response.rows[0]
    }

    //Получение всех пользователей
    async selectUsers() {
        var db_response = await this.db.query("SELECT id, last_name, first_name, email, phone, address, role_id FROM users WHERE deleted = false");
        return db_response.rows;
    }



    //Настройки для отправки писем
    transporter: nodemailer.Transporter = nodemailer.createTransport({
        host: config.config_mail.host,
        port: config.config_mail.port,
        secure: config.config_mail.secure,
        auth: {
            user: config.config_mail.auth.user,
            pass: config.config_mail.auth.pass
        },
    });


}