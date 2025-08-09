"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var DateStr_1 = require("../config/dbase/DateStr");
var DBase_1 = require("../config/dbase/DBase");
var filters_1 = require("./sql/filters");
var layout_1 = require("./sql/layout");
var material_1 = require("./sql/material");
var product_groups_1 = require("./sql/product_groups");
var product_1 = require("./sql/product");
var req_product_1 = require("./sql/req_product");
var reviews_1 = require("./sql/reviews");
var status_1 = require("./sql/status");
var user_roles_1 = require("./sql/user_roles");
var users_1 = require("./sql/users");
var user_sess_1 = require("./sql/user_sess");
function run() {
    return __awaiter(this, void 0, void 0, function () {
        var db, dt;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    db = (0, DBase_1.getDB)();
                    return [4, db.NOW()];
                case 1:
                    dt = _a.sent();
                    console.log("START INSTALLER", (0, DateStr_1.dateTimeToStr)(dt));
                    console.log("ADDING TABLE \"filters\"");
                    return [4, db.query(filters_1.filters_table.sql)];
                case 2:
                    _a.sent();
                    console.log("TABLE \"filters\" ADD");
                    console.log("ADDING TABLE \"layout\"");
                    return [4, db.query(layout_1.layout_table.sql)];
                case 3:
                    _a.sent();
                    console.log("TABLE \"layout\" ADD");
                    console.log("ADDING TABLE \"material\"");
                    return [4, db.query(material_1.material_table.sql)];
                case 4:
                    _a.sent();
                    console.log("TABLE \"material\" ADD");
                    console.log("ADDING TABLE \"product_groups\"");
                    return [4, db.query(product_groups_1.product_groups_table.sql)];
                case 5:
                    _a.sent();
                    console.log("TABLE \"product_groups\" ADD");
                    console.log("ADDING TABLE \"product\"");
                    return [4, db.query(product_1.product_table.sql)];
                case 6:
                    _a.sent();
                    console.log("TABLE \"product\" ADD");
                    console.log("ADDING TABLE \"req_product\"");
                    return [4, db.query(req_product_1.req_product_table.sql)];
                case 7:
                    _a.sent();
                    console.log("TABLE \"req_product\" ADD");
                    console.log("ADDING TABLE \"reviews\"");
                    return [4, db.query(reviews_1.reviews_table.sql)];
                case 8:
                    _a.sent();
                    console.log("TABLE \"reviews\" ADD");
                    console.log("ADDING TABLE \"status\"");
                    return [4, db.query(status_1.status_table.sql)];
                case 9:
                    _a.sent();
                    console.log("TABLE \"status\" ADD");
                    console.log("ADDING TABLE \"user_roles\"");
                    return [4, db.query(user_roles_1.user_roles_table.sql)];
                case 10:
                    _a.sent();
                    console.log("TABLE \"user_roles\" ADD");
                    console.log("ADDING TABLE \"user_sess\"");
                    return [4, db.query(user_sess_1.users_sess_table.sql)];
                case 11:
                    _a.sent();
                    console.log("TABLE \"user_sess\" ADD");
                    console.log("ADDING TABLE \"users\"");
                    return [4, db.query(users_1.users_table.sql)];
                case 12:
                    _a.sent();
                    console.log("TABLE \"users\" ADD");
                    console.log("CREATE STATUS");
                    return [4, db.query(status_1.insert_status.sql, status_1.insert_status.args)];
                case 13:
                    _a.sent();
                    console.log("CREATE USER");
                    return [4, db.query(users_1.insert_user.sql, users_1.insert_user.args)];
                case 14:
                    _a.sent();
                    console.log("CREATE USER ROLES");
                    return [4, db.query(user_roles_1.insert_role.sql, user_roles_1.insert_role.args)];
                case 15:
                    _a.sent();
                    (0, DBase_1.endDB)();
                    console.log("END INSTALLER");
                    return [2];
            }
        });
    });
}
run();
//# sourceMappingURL=main.js.map