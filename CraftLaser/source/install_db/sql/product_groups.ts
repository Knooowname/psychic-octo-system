import crypto from 'crypto';
import CONFIG from '../../config/config.json';
import {dateTimeToSQL} from '../../config/dbase/DateStr'
import {DBase, endDB, getDB} from '../../config/dbase/DBase'


export const product_groups_table = {
    sql: `
    DROP TABLE IF EXISTS product_groups;
    CREATE TABLE product_groups (
        id                  BIGSERIAL NOT NULL PRIMARY KEY,
        parent_id            BIGINT DEFAULT(0),
        name_group        VARCHAR(250) DEFAULT(''),
        img                 TEXT DEFAULT(''),
        deleted             BOOL DEFAULT(FALSE),
        created_at          TIMESTAMP DEFAULT(CURRENT_TIMESTAMP)
    );

    COMMENT ON TABLE product_groups IS 'Группы изделий';
    COMMENT ON COLUMN product_groups.id IS 'Идентификатор';
    COMMENT ON COLUMN product_groups.parent_id IS 'Идентификатор родительской группы';
    COMMENT ON COLUMN product_groups.name_group IS 'Название группы';
    COMMENT ON COLUMN product_groups.img IS 'Изображение для группы';
    COMMENT ON COLUMN product_groups.deleted IS 'Заблокирована ли группа';
    COMMENT ON COLUMN product_groups.created_at IS 'Дата создания';
    `,
    args: new Array()
};


