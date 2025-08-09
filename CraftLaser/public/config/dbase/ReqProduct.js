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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReqProduct = void 0;
var DateStr_1 = require("./DateStr");
var DBase_1 = require("./DBase");
var nodemailer_1 = __importDefault(require("nodemailer"));
var config_json_1 = __importDefault(require("../config.json"));
var ReqProduct = (function () {
    function ReqProduct(_args, _sess_code) {
        this.transporter = nodemailer_1.default.createTransport({
            host: config_json_1.default.config_mail.host,
            port: config_json_1.default.config_mail.port,
            secure: config_json_1.default.config_mail.secure,
            auth: {
                user: config_json_1.default.config_mail.auth.user,
                pass: config_json_1.default.config_mail.auth.pass
            },
        });
        this.db = (0, DBase_1.getDB)();
        this.args = _args;
        this.sess_code = _sess_code;
    }
    ReqProduct.prototype.selectReqProduct = function () {
        return __awaiter(this, void 0, void 0, function () {
            var db_response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.db.query("SELECT * FROM req_product order by id DESC")];
                    case 1:
                        db_response = _a.sent();
                        if (db_response.rows.length === 0) {
                            return [2, null];
                        }
                        else {
                            return [2, db_response.rows];
                        }
                        return [2];
                }
            });
        });
    };
    ReqProduct.prototype.addNewReqProduct = function () {
        return __awaiter(this, void 0, void 0, function () {
            var db_response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.db.query("INSERT INTO req_product(product_id, user_id, address_delivery, status_id, created_at, finished_at )" +
                            "VALUES(" + this.args.product_id + ", " + this.args.user_id + " , '" + this.args.address_delivery + "', 1, " +
                            " '" + (0, DateStr_1.dateTimeToSQL)(new Date(Date())) + "', null) RETURNING id")];
                    case 1:
                        db_response = _a.sent();
                        return [2, db_response.rows[0]];
                }
            });
        });
    };
    ReqProduct.prototype.changeNewReqProduct = function () {
        return __awaiter(this, void 0, void 0, function () {
            var db_response, db_response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.args.status_id === 4)) return [3, 2];
                        return [4, this.db.query("UPDATE req_product SET address_delivery = '" + this.args.address_delivery + "'," +
                                " status_id = " + this.args.status_id + ", finished_at = '" + (0, DateStr_1.dateTimeToSQL)(new Date(Date.now())) + "' WHERE id = " + this.args.id + " RETURNING id")];
                    case 1:
                        db_response = _a.sent();
                        return [2, db_response.rows[0]];
                    case 2: return [4, this.db.query("UPDATE req_product SET address_delivery = '" + this.args.address_delivery + "'," +
                            " status_id = " + this.args.status_id + " WHERE id = " + this.args.id + " RETURNING id")];
                    case 3:
                        db_response = _a.sent();
                        return [2, db_response.rows[0]];
                }
            });
        });
    };
    ReqProduct.prototype.sendToMailRequest = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.transporter.sendMail({
                            from: config_json_1.default.config_mail.auth.user,
                            to: "craftlaser@mail.ru",
                            subject: "Заявка на обратную связь",
                            html: "<h1>Данное сообщение отправлено для обратной связи на сайте КрафтЛазер </h1>  <br> Клиент:<h2>" + this.args.lastname + "</h2> <br>Телефон: <h2>" + this.args.phone + "</h2> <br> E-mail:<h2> " + this.args.email + "</h2> "
                        })];
                    case 1:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    return ReqProduct;
}());
exports.ReqProduct = ReqProduct;
//# sourceMappingURL=ReqProduct.js.map