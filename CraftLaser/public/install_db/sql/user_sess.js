"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.users_sess_table = void 0;
exports.users_sess_table = {
    sql: "\n    DROP TABLE IF EXISTS user_sess;\n    CREATE TABLE user_sess (\n        id              BIGSERIAL NOT NULL PRIMARY KEY,\n        user_id             BIGINT DEFAULT(0),\n        sess_code       TEXT DEFAULT('')\n    );\n    COMMENT ON TABLE user_sess IS '\u0421\u0435\u0441\u0441\u0438\u0438 \u0430\u0432\u0442\u043E\u0440\u0438\u0437\u043E\u0432\u0430\u043D\u043D\u044B\u0445 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u0439';\n    COMMENT ON COLUMN user_sess.id IS '\u0418\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440 \u0441\u0435\u0441\u0441\u0438\u0438';\n    COMMENT ON COLUMN user_sess.user_id IS '\u0418\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F';\n    COMMENT ON COLUMN user_sess.id IS '\u0421\u0433\u0435\u043D\u0435\u0440\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u0430\u044F \u0441\u0435\u0441\u0441\u0438\u044F';\n    ",
    args: new Array()
};
//# sourceMappingURL=user_sess.js.map