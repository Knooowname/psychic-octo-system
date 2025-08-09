import { DBase, getDB } from "./DBase";



export class Status {
    db: DBase;
    args: any;
    sess_code: string;
    constructor(_args: any, _sess_code: string) {
        this.db = getDB();
        this.args = _args;
        this.sess_code = _sess_code;
    }
    //Получение статутсов исполнения задач
    async selectStatus(){
        var db_response = await this.db.query("SELECT * FROM status");
        return db_response.rows;
    }
}