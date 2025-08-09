"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reviews_table = void 0;
exports.reviews_table = {
    sql: "\n    DROP TABLE IF EXISTS reviews;\n    CREATE TABLE reviews (\n        id                      BIGSERIAL NOT NULL PRIMARY KEY,\n        user_id                      BIGINT DEFAULT(0),\n        review                TEXT DEFAULT('')\n    );\n\n    COMMENT ON TABLE reviews IS '\u041E\u0442\u0437\u044B\u0432\u044B';\n    COMMENT ON COLUMN reviews.id IS '\u0418\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0442\u0430\u0442\u043E\u0440';\n    COMMENT ON COLUMN reviews.user_id IS '\u0418\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0442\u0430\u0442\u043E\u0440 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F';\n    COMMENT ON COLUMN reviews.review IS '\u041D\u0430\u043F\u0438\u0441\u0430\u043D\u043D\u044B\u0439 \u043E\u0442\u0437\u044B\u0432';\n    ",
    args: new Array()
};
//# sourceMappingURL=reviews.js.map