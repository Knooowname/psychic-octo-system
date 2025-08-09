"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.insert_status = exports.status_table = void 0;
exports.status_table = {
    sql: "\n    DROP TABLE IF EXISTS status;\n    CREATE TABLE status (\n        id                      BIGSERIAL NOT NULL PRIMARY KEY,\n        name_status             TEXT DEFAULT('')\n    );\n\n    COMMENT ON TABLE status IS '\u0421\u0442\u0430\u0442\u0443\u0441\u044B \u0437\u0430\u043F\u0440\u043E\u0441\u043E\u0432';\n    COMMENT ON COLUMN status.id IS '\u0418\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0442\u0430\u0442\u043E\u0440';\n    COMMENT ON COLUMN status.name_status IS '\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0441\u0442\u0430\u0442\u0443\u0441\u043E\u0432';\n    ",
    args: new Array()
};
exports.insert_status = {
    sql: "INSERT INTO status (name_status) VALUES ($1), ($2), ($3), ($4)",
    args: ['Новый заказ', "В работе", "В доставке", "Выполнен"]
};
//# sourceMappingURL=status.js.map