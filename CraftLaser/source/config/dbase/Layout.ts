import { DBase, getDB } from "./DBase";

export class Layout {
    db: DBase;
    args: any;
    sess_code: string;
    constructor(_args: any, _sess_code: string) {
        this.db = getDB();
        this.args = _args;
        this.sess_code = _sess_code;
    }


    //добавление новых макетов изделий
    async addNewLayout() {
        var db_response = await this.db.query("SELECT * FROM layout WHERE document = '" + this.args.document + "'");
        if (db_response.rows[0] === undefined) {
            db_response = await this.db.query("INSERT INTO layout(document) VALUES ('" + this.args.document + "') RETURNING id")
            return db_response.rows[0]
        }
        else {
            return null
        }
    }

    async changeLayout(){
        var db_response = await this.db.query("UPDATE layout SET document = '"+this.args.document+"' "+
            "WHERE id = (SELECT layout_id FROM product WHERE product.id = "+this.args.id+") RETURNING id");
        return db_response.rows[0]
    }
}