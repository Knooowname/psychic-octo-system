
import { dateTimeToStr } from '../config/dbase/DateStr'
import { DBase, endDB, getDB } from '../config/dbase/DBase';



import { filters_table } from './sql/filters';
import { layout_table } from './sql/layout';
import { material_table} from './sql/material';
import { product_groups_table } from './sql/product_groups';
import { product_table } from './sql/product';
import { req_product_table } from './sql/req_product';
import { reviews_table } from './sql/reviews';
import { insert_status, status_table } from './sql/status';
import { user_roles_table, insert_role } from './sql/user_roles';
import { users_table, insert_user } from './sql/users';
import { users_sess_table } from './sql/user_sess';



async function run() {
    var db: DBase = getDB();

    var dt = await db.NOW();
    console.log("START INSTALLER", dateTimeToStr(dt));

    //Создание таблиц пользователя
    console.log("ADDING TABLE \"filters\"");
    await db.query(filters_table.sql);
    console.log("TABLE \"filters\" ADD");

    console.log("ADDING TABLE \"layout\"");
    await db.query(layout_table.sql);
    console.log("TABLE \"layout\" ADD");

    console.log("ADDING TABLE \"material\"");
    await db.query(material_table.sql);
    console.log("TABLE \"material\" ADD");

    console.log("ADDING TABLE \"product_groups\"");
    await db.query(product_groups_table.sql);
    console.log("TABLE \"product_groups\" ADD");

    console.log("ADDING TABLE \"product\"");
    await db.query(product_table.sql);
    console.log("TABLE \"product\" ADD");

    console.log("ADDING TABLE \"req_product\"");
    await db.query(req_product_table.sql);
    console.log("TABLE \"req_product\" ADD");

    console.log("ADDING TABLE \"reviews\"");
    await db.query(reviews_table.sql);
    console.log("TABLE \"reviews\" ADD");

    console.log("ADDING TABLE \"status\"");
    await db.query(status_table.sql);
    console.log("TABLE \"status\" ADD");

    console.log("ADDING TABLE \"user_roles\"");
    await db.query(user_roles_table.sql);
    console.log("TABLE \"user_roles\" ADD");

    console.log("ADDING TABLE \"user_sess\"");
    await db.query(users_sess_table.sql);
    console.log("TABLE \"user_sess\" ADD");

    console.log("ADDING TABLE \"users\"");
    await db.query(users_table.sql);
    console.log("TABLE \"users\" ADD");



    //Создание метериалов
    // console.log("CREATE MATERIAL");
    // await db.query(insert_material.sql, insert_material.args);
    console.log("CREATE STATUS");
    await db.query(insert_status.sql, insert_status.args);

    console.log("CREATE USER");
    await db.query(insert_user.sql, insert_user.args);

    console.log("CREATE USER ROLES");
    await db.query(insert_role.sql, insert_role.args);

    endDB();
    console.log("END INSTALLER");
}

run();
