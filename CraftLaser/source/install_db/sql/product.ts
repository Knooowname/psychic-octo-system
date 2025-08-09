import crypto from 'crypto';
import CONFIG from '../../config/config.json';
import {dateTimeToSQL} from '../../config/dbase/DateStr'
import {DBase, endDB, getDB} from '../../config/dbase/DBase'



export const product_table = {
    sql: `
    DROP TABLE IF EXISTS product;
    CREATE TABLE product (
        id                  BIGSERIAL NOT NULL PRIMARY KEY,
        name_product        VARCHAR(250) DEFAULT(''),
        group_id            BIGINT DEFAULT(0),
        description         VARCHAR(255) DEFAULT(''),
        characteristic      VARCHAR(255) DEFAULT(''),
        material_id         BIGINT DEFAULT(0),
        filter_ids          VARCHAR(50) DEFAULT(''),
        img                 TEXT DEFAULT(''),
        layout_id           BIGINT DEFAULT(0),
        price               VARCHAR(50), 
        deleted             BOOL DEFAULT(FALSE),
        created_at          TIMESTAMP DEFAULT(CURRENT_TIMESTAMP)
    );

    COMMENT ON TABLE product IS 'Изделия';
    COMMENT ON COLUMN product.id IS 'Идентификатор';
    COMMENT ON COLUMN product.group_id IS 'Идентификатор группы';
    COMMENT ON COLUMN product.description IS 'Описание';
    COMMENT ON COLUMN product.characteristic IS 'Характеристики';
    COMMENT ON COLUMN product.material_id IS 'Идентификатор материала';
    COMMENT ON COLUMN product.filter_ids IS 'Идентификаторы фильтрации';
    COMMENT ON COLUMN product.img IS 'Массив картинок';
    COMMENT ON COLUMN product.layout_id IS 'Идентфикатор прикрепленных макетов';
    COMMENT ON COLUMN product.price IS 'Цена изделия';
    COMMENT ON COLUMN product.deleted IS 'Заблокировано ли изделие';
    COMMENT ON COLUMN product.created_at IS 'Дата создания';
    `,
    args: new Array()
};


