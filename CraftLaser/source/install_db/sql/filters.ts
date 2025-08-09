import crypto from 'crypto';
import CONFIG from '../../config/config.json';
import {dateTimeToSQL} from '../../config/dbase/DateStr'
import {DBase, endDB, getDB} from '../../config/dbase/DBase'



export const filters_table = {
    sql: `
    DROP TABLE IF EXISTS filters;
    CREATE TABLE filters (
        id                      BIGSERIAL NOT NULL PRIMARY KEY,
        name_filters             TEXT DEFAULT('')
    );

    COMMENT ON TABLE filters IS 'Названия фильтров для возможности фильтровать изделия';
    COMMENT ON COLUMN filters.id IS 'Идентификтатор';
    COMMENT ON COLUMN filters.name_filters IS 'Название фильтров';
    `,
    args: new Array()
};



