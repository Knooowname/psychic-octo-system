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
exports.Users = void 0;
var DBase_1 = require("./DBase");
var crypto_1 = __importDefault(require("crypto"));
var config_json_1 = __importDefault(require("../config.json"));
var DateStr_1 = require("./DateStr");
var nodemailer_1 = __importDefault(require("nodemailer"));
var Users = (function () {
    function Users(_args, _sess_code) {
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
    Users.prototype.regist = function () {
        return __awaiter(this, void 0, void 0, function () {
            var checkUser, pass, mail_code, re_pass_code, db_response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.auth()];
                    case 1:
                        checkUser = _a.sent();
                        if (!(checkUser === undefined)) return [3, 3];
                        pass = crypto_1.default
                            .createHmac("sha256", config_json_1.default.crypto_code)
                            .update(this.args.password)
                            .digest("hex");
                        mail_code = crypto_1.default
                            .createHmac("sha256", config_json_1.default.crypto_code)
                            .update("_" + this.args.email)
                            .digest("hex");
                        re_pass_code = crypto_1.default
                            .createHmac("sha256", config_json_1.default.crypto_code)
                            .update("_" + pass)
                            .digest("hex");
                        return [4, this.db.query("INSERT INTO users (last_name, first_name, email, password, phone, address, " +
                                "role_id, mail_code, act_mail, re_password_code, deleted, data_deleted, created_at) " +
                                " VALUES ('" + this.args.lastname + "', '" + this.args.firstname + "', '" + this.args.email + "', " +
                                "'" + pass + "', '" + this.args.phone + "', '" + this.args.address + "', '" + this.args.role_id + "', " +
                                "'" + mail_code + "', false, '" + re_pass_code + "' , false, null, '" + (0, DateStr_1.dateTimeToSQL)(new Date(Date.now())) + "') RETURNING id")];
                    case 2:
                        db_response = _a.sent();
                        if (this.args.role_id !== '2' || this.args.role_id !== '1') {
                            this.sendMailToConfirm();
                        }
                        return [2, db_response.rows];
                    case 3: return [2, null];
                }
            });
        });
    };
    Users.prototype.deleteManager = function () {
        return __awaiter(this, void 0, void 0, function () {
            var db_response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.db.query("DELETE FROM users WHERE id = " + this.args.id + " RETURNING id")];
                    case 1:
                        db_response = _a.sent();
                        return [2, db_response.rows[0]];
                }
            });
        });
    };
    Users.prototype.auth = function () {
        return __awaiter(this, void 0, void 0, function () {
            var pass, db_response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.sess_code === "")) return [3, 2];
                        pass = crypto_1.default
                            .createHmac("sha256", config_json_1.default.crypto_code)
                            .update(this.args.password)
                            .digest("hex");
                        db_response = null;
                        return [4, this.db.query("SELECT id, last_name, first_name, email, phone, address, role_id, deleted FROM users WHERE email ='" +
                                this.args.email +
                                "' and password = '" +
                                pass +
                                "'")];
                    case 1:
                        db_response = _a.sent();
                        return [3, 4];
                    case 2: return [4, this.db.query("SELECT users.id, last_name, first_name, email, phone, address, role_id, deleted FROM users " +
                            " JOIN user_sess ON users.id = user_sess.user_id  WHERE user_sess.sess_code = '" + this.sess_code + "'")];
                    case 3:
                        db_response = _a.sent();
                        _a.label = 4;
                    case 4: return [2, db_response.rows[0]];
                }
            });
        });
    };
    Users.prototype.addSessCode = function () {
        return __awaiter(this, void 0, void 0, function () {
            var pass, db_response, date, id_q, id, sess;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        pass = crypto_1.default
                            .createHmac("sha256", config_json_1.default.crypto_code)
                            .update(this.args.password)
                            .digest("hex");
                        return [4, this.db.query("SELECT id FROM users WHERE email = '" +
                                this.args.email +
                                "' and password = '" +
                                pass +
                                "'")];
                    case 1:
                        db_response = _a.sent();
                        if (!(db_response.rows.length !== 0)) return [3, 4];
                        date = new Date();
                        date.setDate(date.getDate() + 15);
                        return [4, this.db.query("SELECT max(id) FROM user_sess")];
                    case 2:
                        id_q = _a.sent();
                        id = 0;
                        if (id_q.rows[0].max === null) {
                            id++;
                        }
                        else {
                            id = parseInt(id_q.rows[0].max) + 1;
                        }
                        sess = crypto_1.default
                            .createHmac("sha256", config_json_1.default.crypto_code)
                            .update(id + "_" + (0, DateStr_1.dateTimeToSQL)(date) + "_" + db_response.rows[0].selectiduser)
                            .digest("hex");
                        return [4, this.db.query("INSERT INTO user_sess (id, user_id, sess_code) " +
                                "VALUES (" + id + ", " + db_response.rows[0].id + ", '" + sess + "')")];
                    case 3:
                        _a.sent();
                        return [2, sess];
                    case 4: return [2];
                }
            });
        });
    };
    Users.prototype.deleteSessCode = function () {
        return __awaiter(this, void 0, void 0, function () {
            var db_response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.db.query("DELETE FROM user_sess WHERE sess_code = '" + this.sess_code + "' RETURNING id")];
                    case 1:
                        db_response = _a.sent();
                        return [2, db_response.rows[0]];
                }
            });
        });
    };
    Users.prototype.sendMailToConfirm = function () {
        return __awaiter(this, void 0, void 0, function () {
            var mail_code;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        mail_code = crypto_1.default
                            .createHmac("sha256", config_json_1.default.crypto_code)
                            .update("_" + this.args.email)
                            .digest("hex");
                        return [4, this.transporter.sendMail({
                                from: config_json_1.default.config_mail.auth.user,
                                to: this.args.email,
                                subject: "Подтвержденние электронной почты",
                                html: 'Данное сообщение отправлено для подтверждения почтового ящика на сайте КрафтЛазер <h1><a href="http://' +
                                    config_json_1.default.server_config.host +
                                    ":" +
                                    config_json_1.default.server_config.port +
                                    "/confirm_mail?code= " +
                                    mail_code +
                                    '">Нажмите на данное сообщение для подтверждения почты</a></h1>',
                            })];
                    case 1:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    Users.prototype.confirmMail = function () {
        return __awaiter(this, void 0, void 0, function () {
            var db_response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.db.query("UPDATE USERS SET act_mail = true WHERE mail_code = '" + this.args.mail_code + "' RETURNING id")];
                    case 1:
                        db_response = _a.sent();
                        return [2, db_response.rows[0]];
                }
            });
        });
    };
    Users.prototype.sendMailToRecoverPass = function () {
        return __awaiter(this, void 0, void 0, function () {
            var db_response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.db.query("SELECT re_password_code FROM users WHERE email= '" +
                            this.args.email + "'")];
                    case 1:
                        db_response = _a.sent();
                        if (!(db_response.rows[0] !== undefined)) return [3, 3];
                        return [4, this.transporter.sendMail({
                                from: config_json_1.default.config_mail.auth.user,
                                to: this.args.email,
                                subject: "Восстановление пароля",
                                html: 'Данное отправлено для сброса пароля на сайте КрафтЛазер. <h1><a href="http://' +
                                    config_json_1.default.server_config.host +
                                    ":" +
                                    config_json_1.default.server_config.port +
                                    "/reset_pass?code= " +
                                    db_response.rows[0].re_password_code + " mail=" + this.args.email +
                                    ' ">Нажмите на данное сообщение для сброса пароля </a></h1>',
                            })];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2, db_response.rows[0]];
                }
            });
        });
    };
    Users.prototype.recoverPass = function () {
        return __awaiter(this, void 0, void 0, function () {
            var pass, re_pass_code, db_response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        pass = crypto_1.default
                            .createHmac("sha256", config_json_1.default.crypto_code)
                            .update(this.args.password)
                            .digest("hex");
                        re_pass_code = crypto_1.default
                            .createHmac("sha256", config_json_1.default.crypto_code)
                            .update("_" + pass)
                            .digest("hex");
                        return [4, this.db.query("SELECT re_password_code FROM users WHERE email ='" +
                                this.args.email +
                                "'")];
                    case 1:
                        db_response = _a.sent();
                        if (!(db_response.rows[0] !== undefined && db_response.rows[0].re_password_code === this.args.code)) return [3, 3];
                        return [4, this.db.query("UPDATE users SET password = '" +
                                pass + "', re_password_code = '" + re_pass_code + "' WHERE email = '" +
                                this.args.email + "' RETURNING id")];
                    case 2:
                        db_response = _a.sent();
                        return [2, db_response.rows[0]];
                    case 3: return [2, db_response.rows[0] = undefined];
                }
            });
        });
    };
    Users.prototype.changeDataUser = function () {
        return __awaiter(this, void 0, void 0, function () {
            var db_response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.db.query("UPDATE users SET last_name = '" + this.args.lastname + "'," +
                            " first_name = '" + this.args.firstname + "', phone = '" + this.args.phone + "', " +
                            "address = '" + this.args.address + "' WHERE email = '" + this.args.email + "' RETURNING id")];
                    case 1:
                        db_response = _a.sent();
                        return [2, db_response.rows[0]];
                }
            });
        });
    };
    Users.prototype.selectUsers = function () {
        return __awaiter(this, void 0, void 0, function () {
            var db_response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.db.query("SELECT id, last_name, first_name, email, phone, address, role_id FROM users WHERE deleted = false")];
                    case 1:
                        db_response = _a.sent();
                        return [2, db_response.rows];
                }
            });
        });
    };
    return Users;
}());
exports.Users = Users;
//# sourceMappingURL=Users.js.map