import { DBase, getDB } from "./DBase";

export class Filters {
    db: DBase;
    args: any;
    sess_code: string;
    constructor(_args: any, _sess_code: string) {
        this.db = getDB();
        this.args = _args;
        this.sess_code = _sess_code;
    }
    //получение категорий фильтров
    async selectFilters() {
        var db_response = await this.db.query("SELECT * FROM filters");
        if (db_response.rows.length === 0) {
            return null
        }
        else {
            return db_response.rows;
        }
    }
    //добавление новых фильтров
    async addNewFilter() {
        var db_response = await this.db.query("SELECT * FROM filters WHERE name_filters = '" + this.args.name_filter + "'");
        if (db_response.rows[0] === undefined) {
            db_response = await this.db.query("INSERT INTO filters(name_filters) VALUES ('" + this.args.name_filter + "') RETURNING id")
            return db_response.rows[0]
        }
        else {
            return null
        }
    }
}