import { dateTimeToSQL } from "./DateStr";
import { DBase, getDB } from "./DBase";
import nodemailer from "nodemailer";

import config from "../config.json";


export class ReqProduct {
    db: DBase;
    args: any;
    sess_code: string;
    constructor(_args: any, _sess_code: string) {
        this.db = getDB();
        this.args = _args;
        this.sess_code = _sess_code;
    }

    //Получение групп изделий
    async selectReqProduct() {
        var db_response = await this.db.query("SELECT * FROM req_product order by id DESC");
        if (db_response.rows.length === 0) {
            return null
        }
        else {
            return db_response.rows;
        }
    }

    //Добавление новой заявки
    async addNewReqProduct() {
        var db_response = await this.db.query("INSERT INTO req_product(product_id, user_id, address_delivery, status_id, created_at, finished_at )" +
            "VALUES(" + this.args.product_id + ", " + this.args.user_id + " , '" + this.args.address_delivery + "', 1, " +
            " '" + dateTimeToSQL(new Date(Date())) + "', null) RETURNING id")
        return db_response.rows[0]
    }
    //Изменение заявки
    async changeNewReqProduct() {
        if (this.args.status_id === 4) {
            var db_response = await this.db.query("UPDATE req_product SET address_delivery = '" + this.args.address_delivery + "'," +
                " status_id = " + this.args.status_id + ", finished_at = '" + dateTimeToSQL(new Date(Date.now())) + "' WHERE id = " + this.args.id + " RETURNING id")
            return db_response.rows[0]
        }
        else {
            var db_response = await this.db.query("UPDATE req_product SET address_delivery = '" + this.args.address_delivery + "'," +
                " status_id = " + this.args.status_id + " WHERE id = " + this.args.id + " RETURNING id")
            return db_response.rows[0]
        }

    }

    async sendToMailRequest() {
        await this.transporter.sendMail({
            from: config.config_mail.auth.user,
            //Получение email от пользователя
            to: "craftlaser@mail.ru",
            subject: "Заявка на обратную связь",
            //Отправка ссылки с кодом для подтверждения
            html:
                "<h1>Данное сообщение отправлено для обратной связи на сайте КрафтЛазер </h1>  <br> Клиент:<h2>" + this.args.lastname + "</h2> <br>Телефон: <h2>"+this.args.phone+"</h2> <br> E-mail:<h2> "+this.args.email+"</h2> "

        });

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