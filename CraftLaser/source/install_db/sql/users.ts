import crypto from 'crypto';
import CONFIG from '../../config/config.json';
import {dateTimeToSQL} from '../../config/dbase/DateStr'
import {DBase, endDB, getDB} from '../../config/dbase/DBase'



export const users_table = {
    sql: `
    DROP TABLE IF EXISTS users;
    CREATE TABLE users (
        id                  BIGSERIAL NOT NULL PRIMARY KEY,
        last_name           VARCHAR(150) DEFAULT(''),
        first_name          VARCHAR(150) DEFAULT(''),
        email               VARCHAR(150) DEFAULT(''),
        password            TEXT DEFAULT(''),
        phone               VARCHAR(20) DEFAULT(''),
        address             TEXT DEFAULT(''),
        role_id             BIGINT DEFAULT(0),
        mail_code           TEXT DEFAULT(''),
        act_mail            BOOL DEFAULT(FALSE),
        re_password_code    TEXT DEFAULT(''),
        deleted             BOOL DEFAULT(FALSE),
        data_deleted        TIMESTAMP DEFAULT(CURRENT_TIMESTAMP),
        created_at          TIMESTAMP DEFAULT(CURRENT_TIMESTAMP)
    );

    COMMENT ON TABLE users IS 'Пользователи';
    COMMENT ON COLUMN users.id IS 'Идентификатор';
    COMMENT ON COLUMN users.last_name IS 'Фамилия';
    COMMENT ON COLUMN users.first_name IS 'Имя';
    COMMENT ON COLUMN users.email IS 'Почта/Логин';
    COMMENT ON COLUMN users.password IS 'Пароль';
    COMMENT ON COLUMN users.phone IS 'Телефон';
    COMMENT ON COLUMN users.address IS 'Адрес доставки';
    COMMENT ON COLUMN users.role_id IS 'Идентифкатор роли';
    COMMENT ON COLUMN users.mail_code IS 'Код подтверждения почты';
    COMMENT ON COLUMN users.act_mail IS 'Активирована ли почта';
    COMMENT ON COLUMN users.re_password_code IS 'Код сброса пароля';
    COMMENT ON COLUMN users.deleted IS 'Удален ли аккаунт';
    COMMENT ON COLUMN users.data_deleted IS 'Удален ли аккаунт';
    COMMENT ON COLUMN users.created_at IS 'Дата регистарции';

    `,
    args: new Array()
};


export const insert_user = {
    sql:`INSERT INTO users(last_name, first_name, email, password, phone, address, role_id, mail_code, act_mail, re_password_code, deleted, data_deleted, created_at) 
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)`,  
    args:['admin', 'admin', 'admin', crypto.createHmac('sha256', CONFIG.crypto_code).update('admin').digest('hex'), '0(000)000-00-00', 'Курган, К.Маркса, стр.106', 1, '', false, 
        crypto.createHmac('sha256', CONFIG.crypto_code).update('admin'+'_'+crypto.createHmac('sha256', CONFIG.crypto_code).update('admin').digest('hex')).digest('hex'), false , null, dateTimeToSQL(new Date(Date.now()))]
};
