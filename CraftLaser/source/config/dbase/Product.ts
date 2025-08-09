import { DBase, getDB } from "./DBase";
import { dateTimeToSQL, dateTimeToStr } from "./DateStr";
import { Layout } from "./Layout";


export class Product {
    db: DBase;
    args: any;
    sess_code: string;
    constructor(_args: any, _sess_code: string) {
        this.db = getDB();
        this.args = _args;
        this.sess_code = _sess_code;
    }

    //Получение групп изделий
    async selectProduct() {
        var db_response = await this.db.query("SELECT * FROM product");
        if (db_response.rows.length === 0) {
            return null
        }
        else {
            return db_response.rows;
        }

    }

    //добавление новой группы изделий
    async addNewProduct() {
        var layout = new Layout(this.args, this.sess_code);
        var data = await layout.addNewLayout();
        if (data === undefined || data === null) {
            return null
        }
        else {
            var db_response = await this.db.query("SELECT * FROM product WHERE name_product = '" + this.args.name_product + "'");
            if (db_response.rows[0] === undefined) {
                db_response = await this.db.query("INSERT INTO product(name_product, group_id, description, " +
                    "characteristic, material_id, filter_ids, img, layout_id, price, deleted, created_at) " +
                    "VALUES ('" + this.args.name_product + "', " + this.args.group_id + ", '" + this.args.description + "', " +
                    "'" + this.args.characteristic + "', " + this.args.material_id + ", '" + this.args.filter_ids + "', '" + this.args.img + "', " +
                    "" + data.id + ", '" + this.args.price + "', " + this.args.deleted + ", '" + dateTimeToSQL(new Date(Date.now())) + "' ) RETURNING id")
                return db_response.rows[0]
            }
            else {
                return null
            }
        }
    }

    //изменение группы изделий
    async changeProduct() {

        var layout = new Layout(this.args, this.sess_code);
        var data = await layout.changeLayout();
        if (data === undefined || data === null) {
            return null
        }
        else {
            //update layout 
            var db_response = await this.db.query("UPDATE product SET name_product = '" + this.args.name_product + "', " +
                "group_id = " + this.args.group_id + ", description = '" + this.args.description + "', " +
                "characteristic = '" + this.args.characteristic + "', material_id = " + this.args.material_id + ", " +
                "filter_ids = '" + this.args.filter_ids + "', img = '" + this.args.img + "', price = '" + this.args.price + "', " +
                "deleted = " + this.args.deleted + " WHERE id = " + this.args.id + " RETURNING id");
            return db_response.rows[0]
        }
    }
}