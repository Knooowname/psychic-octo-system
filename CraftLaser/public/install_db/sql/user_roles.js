"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.insert_role = exports.user_roles_table = void 0;
exports.user_roles_table = {
    sql: "\n    DROP TABLE IF EXISTS user_roles;\n    CREATE TABLE user_roles (\n        id              BIGSERIAL NOT NULL PRIMARY KEY,\n        name_role            VARCHAR(50) DEFAULT('')\n    );\n\n    COMMENT ON TABLE user_roles IS '\u0420\u043E\u043B\u044C \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u0439 \u0432 \u0441\u0438\u0441\u0442\u0435\u043C\u0435';\n    COMMENT ON COLUMN user_roles.id IS '\u0418\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440';\n    COMMENT ON COLUMN user_roles.name_role IS '\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435 \u0440\u043E\u043B\u0438';\n    ",
    args: new Array()
};
exports.insert_role = {
    sql: "INSERT INTO user_roles(name_role) VALUES ($1), ($2), ($3)",
    args: ['admin', 'manager', 'client']
};
//# sourceMappingURL=user_roles.js.map