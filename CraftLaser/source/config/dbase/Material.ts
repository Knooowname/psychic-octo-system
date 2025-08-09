import { DBase, getDB } from "./DBase";

export class Material {
    db: DBase;
    args: any;
    sess_code: string;
    constructor(_args: any, _sess_code: string) {
        this.db = getDB();
        this.args = _args;
        this.sess_code = _sess_code;
    }

    //Получение материалов
    async selectMaterial(){
        var db_response = await this.db.query("SELECT * FROM material");
        return db_response.rows;
    }

     //добавление новых материалов
    async addNewMaterial(){
        var db_response = await this.db.query("SELECT * FROM material WHERE name_material = '"+this.args.name_material+"'");
        if(db_response.rows[0] === undefined)
        {
            db_response = await this.db.query("INSERT INTO material(id_filter, name_material) VALUES ( "+this.args.id_filter+" ,'"+this.args.name_material+"') RETURNING id")
            return db_response.rows[0]
        }
        else
        {
            return null
        }
    }
}