import crypto from 'crypto';
import CONFIG from '../../config/config.json';
import {dateTimeToSQL} from '../../config/dbase/DateStr'
import {DBase, endDB, getDB} from '../../config/dbase/DBase'



export const status_table = {
    sql: `
    DROP TABLE IF EXISTS status;
    CREATE TABLE status (
        id                      BIGSERIAL NOT NULL PRIMARY KEY,
        name_status             TEXT DEFAULT('')
    );

    COMMENT ON TABLE status IS 'Статусы запросов';
    COMMENT ON COLUMN status.id IS 'Идентификтатор';
    COMMENT ON COLUMN status.name_status IS 'Название статусов';
    `,
    args: new Array()
};


export const insert_status = {
    sql:`INSERT INTO status (name_status) VALUES ($1), ($2), ($3), ($4)`,  
    args:['Новый заказ', "В работе", "В доставке", "Выполнен"]
};


