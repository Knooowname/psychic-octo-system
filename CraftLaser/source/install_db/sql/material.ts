import crypto from 'crypto';
import CONFIG from '../../config/config.json';
import {dateTimeToSQL} from '../../config/dbase/DateStr'
import {DBase, endDB, getDB} from '../../config/dbase/DBase'



export const material_table = {
    sql: `
    DROP TABLE IF EXISTS material;
    CREATE TABLE material (
        id                      BIGSERIAL NOT NULL PRIMARY KEY,
        id_filter                 BIGINT DEFAULT(0),
        name_material             TEXT DEFAULT('')
    );

    COMMENT ON TABLE material IS 'Материалы изделий';
    COMMENT ON COLUMN material.id IS 'Идентификтатор фильтра';
    COMMENT ON COLUMN material.id_filter IS 'Идентификтатор подгруппы фильтра';
    COMMENT ON COLUMN material.name_material IS 'Название материалов';
    `,
    args: new Array()
};





