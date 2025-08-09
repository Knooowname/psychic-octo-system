"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filters_table = void 0;
exports.filters_table = {
    sql: "\n    DROP TABLE IF EXISTS filters;\n    CREATE TABLE filters (\n        id                      BIGSERIAL NOT NULL PRIMARY KEY,\n        name_filters             TEXT DEFAULT('')\n    );\n\n    COMMENT ON TABLE filters IS '\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u044F \u0444\u0438\u043B\u044C\u0442\u0440\u043E\u0432 \u0434\u043B\u044F \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u0438 \u0444\u0438\u043B\u044C\u0442\u0440\u043E\u0432\u0430\u0442\u044C \u0438\u0437\u0434\u0435\u043B\u0438\u044F';\n    COMMENT ON COLUMN filters.id IS '\u0418\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0442\u0430\u0442\u043E\u0440';\n    COMMENT ON COLUMN filters.name_filters IS '\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0444\u0438\u043B\u044C\u0442\u0440\u043E\u0432';\n    ",
    args: new Array()
};
//# sourceMappingURL=filters.js.map