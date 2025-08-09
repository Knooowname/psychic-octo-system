import { DBase, getDB } from "./DBase";


export class UserRoles {
    db: DBase;
    args: any;
    sess_code: string;
    constructor(_args: any, _sess_code: string) {
        this.db = getDB();
        this.args = _args;
        this.sess_code = _sess_code;
    }
    //Получение ролей для пользователей
    async selectRoles(){
        var db_response = await this.db.query("SELECT * FROM user_roles");
        return db_response.rows;
    }
}