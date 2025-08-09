import crypto from 'crypto';
import CONFIG from '../../config/config.json';
import {dateTimeToSQL} from '../../config/dbase/DateStr'
import {DBase, endDB, getDB} from '../../config/dbase/DBase'



export const user_roles_table = {
    sql: `
    DROP TABLE IF EXISTS user_roles;
    CREATE TABLE user_roles (
        id              BIGSERIAL NOT NULL PRIMARY KEY,
        name_role            VARCHAR(50) DEFAULT('')
    );

    COMMENT ON TABLE user_roles IS 'Роль пользователей в системе';
    COMMENT ON COLUMN user_roles.id IS 'Идентификатор';
    COMMENT ON COLUMN user_roles.name_role IS 'Наименование роли';
    `,
    args: new Array()
};


export const insert_role = {
    sql:`INSERT INTO user_roles(name_role) VALUES ($1), ($2), ($3)`, 
    args:['admin', 'manager', 'client']
};
