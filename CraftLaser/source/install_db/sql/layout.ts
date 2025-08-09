import crypto from 'crypto';
import CONFIG from '../../config/config.json';
import { dateTimeToSQL } from '../../config/dbase/DateStr'
import { DBase, endDB, getDB } from '../../config/dbase/DBase'



export const layout_table = {
    sql: `
    DROP TABLE IF EXISTS layout;
    CREATE TABLE layout (
        id                      BIGSERIAL NOT NULL PRIMARY KEY,
        document                TEXT DEFAULT('')
    );

    COMMENT ON TABLE layout IS 'Макеты изделий';
    COMMENT ON COLUMN layout.id IS 'Идентификтатор';
    COMMENT ON COLUMN layout.document IS 'Прикрепленный документ';
    `,
    args: new Array()
};



