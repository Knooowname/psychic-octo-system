"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.layout_table = void 0;
exports.layout_table = {
    sql: "\n    DROP TABLE IF EXISTS layout;\n    CREATE TABLE layout (\n        id                      BIGSERIAL NOT NULL PRIMARY KEY,\n        document                TEXT DEFAULT('')\n    );\n\n    COMMENT ON TABLE layout IS '\u041C\u0430\u043A\u0435\u0442\u044B \u0438\u0437\u0434\u0435\u043B\u0438\u0439';\n    COMMENT ON COLUMN layout.id IS '\u0418\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0442\u0430\u0442\u043E\u0440';\n    COMMENT ON COLUMN layout.document IS '\u041F\u0440\u0438\u043A\u0440\u0435\u043F\u043B\u0435\u043D\u043D\u044B\u0439 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442';\n    ",
    args: new Array()
};
//# sourceMappingURL=layout.js.map