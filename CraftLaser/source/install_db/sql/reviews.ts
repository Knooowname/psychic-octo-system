import crypto from 'crypto';
import CONFIG from '../../config/config.json';
import { dateTimeToSQL } from '../../config/dbase/DateStr'
import { DBase, endDB, getDB } from '../../config/dbase/DBase'



export const reviews_table = {
    sql: `
    DROP TABLE IF EXISTS reviews;
    CREATE TABLE reviews (
        id                      BIGSERIAL NOT NULL PRIMARY KEY,
        user_id                      BIGINT DEFAULT(0),
        review                TEXT DEFAULT('')
    );

    COMMENT ON TABLE reviews IS 'Отзывы';
    COMMENT ON COLUMN reviews.id IS 'Идентификтатор';
    COMMENT ON COLUMN reviews.user_id IS 'Идентификтатор пользователя';
    COMMENT ON COLUMN reviews.review IS 'Написанный отзыв';
    `,
    args: new Array()
};



