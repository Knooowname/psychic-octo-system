import crypto from 'crypto';
import CONFIG from '../../config/config.json';
import {dateTimeToSQL} from '../../config/dbase/DateStr'
import {DBase, endDB, getDB} from '../../config/dbase/DBase'



export const req_product_table = {
    sql: `
    DROP TABLE IF EXISTS req_product;
    CREATE TABLE req_product (
        id                              BIGSERIAL NOT NULL PRIMARY KEY,
        product_id                      BIGINT DEFAULT(0),
        user_id                      BIGINT DEFAULT(0),
        address_delivery                TEXT DEFAULT(''),
        status_id                       BIGINT DEFAULT(0),
        created_at                      TIMESTAMP DEFAULT(CURRENT_TIMESTAMP),
        finished_at                      TIMESTAMP DEFAULT(CURRENT_TIMESTAMP)
    );

    COMMENT ON TABLE req_product IS 'Заявки';
    COMMENT ON COLUMN req_product.id IS 'Идентификтатор';
    COMMENT ON COLUMN req_product.product_id IS 'Идентификатор изделия';
    COMMENT ON COLUMN req_product.user_id IS 'Идентификатор пользователя';
    COMMENT ON COLUMN req_product.address_delivery IS 'Адрес доставки';
    COMMENT ON COLUMN req_product.status_id IS 'Идентифкатор статуса заявки';
    COMMENT ON COLUMN req_product.created_at IS 'Дата создания заявки';
    COMMENT ON COLUMN req_product.finished_at IS 'Дата завершения заявки';
    `,
    args: new Array()
};



