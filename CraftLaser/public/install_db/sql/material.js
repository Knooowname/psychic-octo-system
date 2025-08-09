"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.material_table = void 0;
exports.material_table = {
    sql: "\n    DROP TABLE IF EXISTS material;\n    CREATE TABLE material (\n        id                      BIGSERIAL NOT NULL PRIMARY KEY,\n        id_filter                 BIGINT DEFAULT(0),\n        name_material             TEXT DEFAULT('')\n    );\n\n    COMMENT ON TABLE material IS '\u041C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u044B \u0438\u0437\u0434\u0435\u043B\u0438\u0439';\n    COMMENT ON COLUMN material.id IS '\u0418\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0442\u0430\u0442\u043E\u0440 \u0444\u0438\u043B\u044C\u0442\u0440\u0430';\n    COMMENT ON COLUMN material.id_filter IS '\u0418\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0442\u0430\u0442\u043E\u0440 \u043F\u043E\u0434\u0433\u0440\u0443\u043F\u043F\u044B \u0444\u0438\u043B\u044C\u0442\u0440\u0430';\n    COMMENT ON COLUMN material.name_material IS '\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u043E\u0432';\n    ",
    args: new Array()
};
//# sourceMappingURL=material.js.map