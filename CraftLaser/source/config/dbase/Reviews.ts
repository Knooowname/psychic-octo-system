import { DBase, getDB } from "./DBase";




export class Reviews {
    db: DBase;
    args: any;
    sess_code: string;
    constructor(_args: any, _sess_code: string) {
        this.db = getDB();
        this.args = _args;
        this.sess_code = _sess_code;
    }

    //Получение отзывов
    async selectReviews() {
        var db_response = await this.db.query("SELECT reviews.review, users.last_name, users.first_name " +
            "FROM reviews INNER JOIN users ON users.id = reviews.user_id");
        if (db_response.rows.length === 0) {
            return null
        }
        else {
            return db_response.rows;
        }
    }

    //Добавление потзывов
    async addNewReviews() {
        var db_response = await this.db.query("INSERT INTO reviews(user_id, review) VALUES ( " + this.args.user_id + " ,'" + this.args.review + "') RETURNING id")
        return db_response.rows[0]
    }
}