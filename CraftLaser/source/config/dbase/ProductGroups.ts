import { DBase, getDB } from "./DBase";
import { dateTimeToSQL, dateTimeToStr } from "./DateStr";


export class ProductGroups {
    db: DBase;
    args: any;
    sess_code: string;
    constructor(_args: any, _sess_code: string) {
        this.db = getDB();
        this.args = _args;
        this.sess_code = _sess_code;
    }

    //Получение групп изделий
    async selectProductGroups() {
        var db_response = await this.db.query("SELECT * FROM product_groups");
        if (db_response.rows.length === 0) {
            return null
        }
        else {
            return db_response.rows;
        }

    }

    //добавление новой группы изделий
    async addNewProductGroups() {
        var db_response = await this.db.query("SELECT * FROM product_groups WHERE name_group = '" + this.args.name_group + "'");
        if (db_response.rows[0] === undefined) {
            db_response = await this.db.query("INSERT INTO product_groups(parent_id, name_group, img, deleted, created_at) " +
                "VALUES (" + this.args.parent_id + ", '" + this.args.name_group + "', '" + this.args.img + "', false, '" + dateTimeToSQL(new Date(Date.now())) + "') RETURNING id")
            return db_response.rows[0]
        }
        else {
            return null
        }
    }

    //изменение группы изделий
    async changeProductGroups() {
        var db_response = await this.db.query("UPDATE product_groups SET " +
            "parent_id = " + this.args.parent_id + ", name_group = '" + this.args.name_group + "', img = '" + this.args.img + "', " +
            " deleted = " + this.args.deleted + " WHERE id = " + this.args.id + " RETURNING id");
        return db_response.rows[0]
    }
}