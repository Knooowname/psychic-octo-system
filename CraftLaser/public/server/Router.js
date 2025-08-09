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
exports.Router = Router;
var Users_1 = require("../config/dbase/Users");
var UserRoles_1 = require("../config/dbase/UserRoles");
var Status_1 = require("../config/dbase/Status");
var Material_1 = require("../config/dbase/Material");
var Filters_1 = require("../config/dbase/Filters");
var Reviews_1 = require("../config/dbase/Reviews");
var ProductGroups_1 = require("../config/dbase/ProductGroups");
var Layout_1 = require("../config/dbase/Layout");
var Product_1 = require("../config/dbase/Product");
var ReqProduct_1 = require("../config/dbase/ReqProduct");
function Router(body) {
    return __awaiter(this, void 0, void 0, function () {
        var res, data, _a, u, u, user_sess_code, u, u, u, u, u, u, u, u, ur, s, m, m, f, f, r, r, pg, pg, pg, l, p, p, p, rp, rp, rp, rp;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    console.log(body);
                    res = {
                        cmd: "",
                        error: "",
                        data: [],
                        sess_code: "",
                    };
                    _a = body.cmd;
                    switch (_a) {
                        case "Regist": return [3, 1];
                        case "Auth": return [3, 3];
                        case "AuthCode": return [3, 8];
                        case "Logout": return [3, 13];
                        case "ConfirmMail": return [3, 15];
                        case "SendMailToRecoverPass": return [3, 17];
                        case "RecoverPass": return [3, 19];
                        case "ChangeUserData": return [3, 21];
                        case "DeletedManager": return [3, 28];
                        case "SelectUsers": return [3, 30];
                        case "SelectUserRoles": return [3, 32];
                        case "SelectStatus": return [3, 34];
                        case "SelectMaterial": return [3, 36];
                        case "AddNewMaterial": return [3, 38];
                        case "SelectFilters": return [3, 40];
                        case "AddNewFilter": return [3, 42];
                        case "SelectReviews": return [3, 44];
                        case "AddNewReviews": return [3, 46];
                        case "AddNewProductGroups": return [3, 48];
                        case "SelectProductGroups": return [3, 50];
                        case "ChangeProductGroups": return [3, 52];
                        case "AddNewLayout": return [3, 54];
                        case "AddNewProduct": return [3, 56];
                        case "SelectProduct": return [3, 58];
                        case "ChangeProduct": return [3, 60];
                        case "AddNewReqProduct": return [3, 62];
                        case "SelectReqProduct": return [3, 63];
                        case "ChangeReqProduct": return [3, 65];
                        case "SendToMailRequest": return [3, 67];
                    }
                    return [3, 69];
                case 1:
                    u = new Users_1.Users(body.args, body.sess_code);
                    return [4, u.regist()];
                case 2:
                    data = _b.sent();
                    if (data === null || data === undefined) {
                        res.cmd = body.cmd;
                        res.code = body.sess_code;
                        res.data = null;
                        res.error =
                            "Пользователь с таким email уже существует";
                    }
                    else {
                        res.cmd = body.cmd;
                        res.code = body.sess_code;
                        res.data = null;
                        res.error = null;
                    }
                    return [3, 70];
                case 3:
                    u = new Users_1.Users(body.args, body.sess_code);
                    return [4, u.addSessCode()];
                case 4:
                    user_sess_code = _b.sent();
                    if (!(user_sess_code === undefined)) return [3, 5];
                    res.cmd = body.cmd;
                    res.error = "Данный пользователь не зарегистрирован";
                    res.data = null;
                    res.sess_code = body.sess_code;
                    return [3, 7];
                case 5: return [4, u.auth()];
                case 6:
                    data = _b.sent();
                    res.cmd = body.cmd;
                    res.data = data;
                    res.error = null;
                    res.sess_code = user_sess_code;
                    _b.label = 7;
                case 7: return [3, 70];
                case 8:
                    u = new Users_1.Users(body.args, body.sess_code);
                    return [4, u.auth()];
                case 9:
                    data = _b.sent();
                    if (!(data === undefined)) return [3, 10];
                    res.cmd = body.cmd;
                    res.error = "Данный пользователь не зарегистрирован";
                    res.data = null;
                    res.sess_code = null;
                    return [3, 12];
                case 10: return [4, u.auth()];
                case 11:
                    data = _b.sent();
                    res.cmd = body.cmd;
                    res.data = data;
                    res.error = null;
                    res.sess_code = body.sess_code;
                    _b.label = 12;
                case 12: return [3, 70];
                case 13:
                    u = new Users_1.Users(body.args, body.sess_code);
                    return [4, u.deleteSessCode()];
                case 14:
                    data = _b.sent();
                    if (data === undefined) {
                        res.cmd = body.cmd;
                        res.data = null;
                        res.error = "Токен подключения был удален ранее";
                        res.sess_code = body.sess_code;
                    }
                    else {
                        res.cmd = body.cmd;
                        res.data = null;
                        res.error = null;
                        res.sess_code = "";
                    }
                    return [3, 70];
                case 15:
                    u = new Users_1.Users(body.args, body.sess_code);
                    return [4, u.confirmMail()];
                case 16:
                    data = _b.sent();
                    if (data === undefined) {
                        res.cmd = body.cmd;
                        res.data = null;
                        res.error = "Почта не была подтверждена";
                        res.sess_code = "";
                    }
                    else {
                        res.cmd = body.cmd;
                        res.data = null;
                        res.error = null;
                        res.sess_code = "";
                    }
                    return [3, 70];
                case 17:
                    u = new Users_1.Users(body.args, body.sess_code);
                    return [4, u.sendMailToRecoverPass()];
                case 18:
                    data = _b.sent();
                    if (data === undefined) {
                        res.cmd = body.cmd;
                        res.data = null;
                        res.error = "Пользователя с данным email не существует";
                        res.sess_code = "";
                    }
                    else {
                        res.cmd = body.cmd;
                        res.data = null;
                        res.error = null;
                        res.sess_code = "";
                    }
                    return [3, 70];
                case 19:
                    u = new Users_1.Users(body.args, body.sess_code);
                    return [4, u.recoverPass()];
                case 20:
                    data = _b.sent();
                    if (data === undefined) {
                        res.cmd = body.cmd;
                        res.data = null;
                        res.error = "Произошла ошибка при сбросе пароля";
                        res.sess_code = "";
                    }
                    else {
                        res.cmd = body.cmd;
                        res.data = null;
                        res.error = null;
                        res.sess_code = "";
                    }
                    return [3, 70];
                case 21:
                    u = new Users_1.Users(body.args, body.sess_code);
                    return [4, u.changeDataUser()];
                case 22:
                    data = _b.sent();
                    if (!(data === undefined)) return [3, 23];
                    res.cmd = body.cmd;
                    res.data = null;
                    res.error = "Произошла ошибка при изменении данных пользователя";
                    res.sess_code = body.sess_code;
                    return [3, 27];
                case 23: return [4, u.auth()];
                case 24:
                    data = _b.sent();
                    if (!(data === undefined)) return [3, 25];
                    res.cmd = body.cmd;
                    res.error = "Произошла непредвиденная ошибка";
                    res.data = null;
                    res.sess_code = null;
                    return [3, 27];
                case 25: return [4, u.auth()];
                case 26:
                    data = _b.sent();
                    res.cmd = body.cmd;
                    res.data = data;
                    res.error = null;
                    res.sess_code = body.sess_code;
                    _b.label = 27;
                case 27: return [3, 70];
                case 28:
                    u = new Users_1.Users(body.args, body.sess_code);
                    return [4, u.deleteManager()];
                case 29:
                    data = _b.sent();
                    if (data === undefined) {
                        res.cmd = body.cmd;
                        res.error = "Произошла ошибка при удалении аккаунта менеджера";
                        res.data = null;
                        res.sess_code = body.sess_code;
                    }
                    else {
                        res.cmd = body.cmd;
                        res.error = null;
                        res.data = data;
                        res.sess_code = body.sess_code;
                    }
                    return [3, 70];
                case 30:
                    u = new Users_1.Users(body.args, body.sess_code);
                    return [4, u.selectUsers()];
                case 31:
                    data = _b.sent();
                    res.cmd = body.cmd;
                    res.data = data;
                    res.error = null;
                    res.sess_code = body.sess_code;
                    return [3, 70];
                case 32:
                    ur = new UserRoles_1.UserRoles(body.args, body.sess_code);
                    return [4, ur.selectRoles()];
                case 33:
                    data = _b.sent();
                    res.cmd = body.cmd;
                    res.data = data;
                    res.error = null;
                    res.sess_code = body.sess_code;
                    return [3, 70];
                case 34:
                    s = new Status_1.Status(body.args, body.sess_code);
                    return [4, s.selectStatus()];
                case 35:
                    data = _b.sent();
                    res.cmd = body.cmd;
                    res.data = data;
                    res.error = null;
                    res.sess_code = body.sess_code;
                    return [3, 70];
                case 36:
                    m = new Material_1.Material(body.args, body.sess_code);
                    return [4, m.selectMaterial()];
                case 37:
                    data = _b.sent();
                    res.cmd = body.cmd;
                    res.data = data;
                    res.error = null;
                    res.sess_code = body.sess_code;
                    return [3, 70];
                case 38:
                    m = new Material_1.Material(body.args, body.sess_code);
                    return [4, m.addNewMaterial()];
                case 39:
                    data = _b.sent();
                    if (data === undefined || data === null) {
                        res.cmd = body.cmd;
                        res.data = null;
                        res.error = "Такое значение материала уже существует";
                        res.sess_code = body.sess_code;
                    }
                    else {
                        res.cmd = body.cmd;
                        res.data = null;
                        res.error = null;
                        res.sess_code = body.sess_code;
                    }
                    return [3, 70];
                case 40:
                    f = new Filters_1.Filters(body.args, body.sess_code);
                    return [4, f.selectFilters()];
                case 41:
                    data = _b.sent();
                    if (data === null) {
                        res.cmd = body.cmd;
                        res.data = null;
                        res.error = "Элементов фильтрации еще нет";
                        res.sess_code = body.sess_code;
                    }
                    else {
                        res.cmd = body.cmd;
                        res.data = data;
                        res.error = null;
                        res.sess_code = body.sess_code;
                    }
                    return [3, 70];
                case 42:
                    f = new Filters_1.Filters(body.args, body.sess_code);
                    return [4, f.addNewFilter()];
                case 43:
                    data = _b.sent();
                    if (data === undefined || data === null) {
                        res.cmd = body.cmd;
                        res.data = null;
                        res.error = "Такое значение фильтра уже существует";
                        res.sess_code = body.sess_code;
                    }
                    else {
                        res.cmd = body.cmd;
                        res.data = null;
                        res.error = null;
                        res.sess_code = body.sess_code;
                    }
                    return [3, 70];
                case 44:
                    r = new Reviews_1.Reviews(body.args, body.sess_code);
                    return [4, r.selectReviews()];
                case 45:
                    data = _b.sent();
                    if (data === null) {
                        res.cmd = body.cmd;
                        res.data = null;
                        res.error = "Отзывов еще нет";
                        res.sess_code = body.sess_code;
                    }
                    else {
                        res.cmd = body.cmd;
                        res.data = data;
                        res.error = null;
                        res.sess_code = body.sess_code;
                    }
                    return [3, 70];
                case 46:
                    r = new Reviews_1.Reviews(body.args, body.sess_code);
                    return [4, r.addNewReviews()];
                case 47:
                    data = _b.sent();
                    if (data === undefined) {
                        res.cmd = body.cmd;
                        res.data = null;
                        res.error = "Произошла ошибка при создании отзыва";
                        res.sess_code = body.sess_code;
                    }
                    else {
                        res.cmd = body.cmd;
                        res.data = null;
                        res.error = null;
                        res.sess_code = body.sess_code;
                    }
                    return [3, 70];
                case 48:
                    pg = new ProductGroups_1.ProductGroups(body.args, body.sess_code);
                    return [4, pg.addNewProductGroups()];
                case 49:
                    data = _b.sent();
                    if (data === undefined || data === null) {
                        res.cmd = body.cmd;
                        res.data = null;
                        res.error = "Такое значение группы уже существует";
                        res.sess_code = body.sess_code;
                    }
                    else {
                        res.cmd = body.cmd;
                        res.data = null;
                        res.error = null;
                        res.sess_code = body.sess_code;
                    }
                    return [3, 70];
                case 50:
                    pg = new ProductGroups_1.ProductGroups(body.args, body.sess_code);
                    return [4, pg.selectProductGroups()];
                case 51:
                    data = _b.sent();
                    if (data === null) {
                        res.cmd = body.cmd;
                        res.data = null;
                        res.error = "Групп изделий еще нет ";
                        res.sess_code = body.sess_code;
                    }
                    else {
                        res.cmd = body.cmd;
                        res.data = data;
                        res.error = null;
                        res.sess_code = body.sess_code;
                    }
                    return [3, 70];
                case 52:
                    pg = new ProductGroups_1.ProductGroups(body.args, body.sess_code);
                    return [4, pg.changeProductGroups()];
                case 53:
                    data = _b.sent();
                    if (data === undefined) {
                        res.cmd = body.cmd;
                        res.data = null;
                        res.error = "Произошла ошибка при изменении данных группы изделий";
                        res.sess_code = body.sess_code;
                    }
                    else {
                        res.cmd = body.cmd;
                        res.data = null;
                        res.error = null;
                        res.sess_code = body.sess_code;
                    }
                    return [3, 70];
                case 54:
                    l = new Layout_1.Layout(body.args, body.sess_code);
                    return [4, l.addNewLayout()];
                case 55:
                    data = _b.sent();
                    if (data === undefined || data === null) {
                        res.cmd = body.cmd;
                        res.data = null;
                        res.error = "Такой макет уже существует";
                        res.sess_code = body.sess_code;
                    }
                    else {
                        res.cmd = body.cmd;
                        res.data = null;
                        res.error = null;
                        res.sess_code = body.sess_code;
                    }
                    return [3, 70];
                case 56:
                    p = new Product_1.Product(body.args, body.sess_code);
                    return [4, p.addNewProduct()];
                case 57:
                    data = _b.sent();
                    if (data === undefined || data === null) {
                        res.cmd = body.cmd;
                        res.data = null;
                        res.error = "Прикрепленный документ или данное изделие уже существует";
                        res.sess_code = body.sess_code;
                    }
                    else {
                        res.cmd = body.cmd;
                        res.data = null;
                        res.error = null;
                        res.sess_code = body.sess_code;
                    }
                    return [3, 70];
                case 58:
                    p = new Product_1.Product(body.args, body.sess_code);
                    return [4, p.selectProduct()];
                case 59:
                    data = _b.sent();
                    if (data === null) {
                        res.cmd = body.cmd;
                        res.data = null;
                        res.error = "Иделия еще не добавлены";
                        res.sess_code = body.sess_code;
                    }
                    else {
                        res.cmd = body.cmd;
                        res.data = data;
                        res.error = null;
                        res.sess_code = body.sess_code;
                    }
                    return [3, 70];
                case 60:
                    p = new Product_1.Product(body.args, body.sess_code);
                    return [4, p.changeProduct()];
                case 61:
                    data = _b.sent();
                    if (data === undefined) {
                        res.cmd = body.cmd;
                        res.data = null;
                        res.error = "Произошла ошибка при изменении данных изделия";
                        res.sess_code = body.sess_code;
                    }
                    else {
                        res.cmd = body.cmd;
                        res.data = null;
                        res.error = null;
                        res.sess_code = body.sess_code;
                    }
                    return [3, 70];
                case 62:
                    {
                        rp = new ReqProduct_1.ReqProduct(body.args, body.sess_code);
                        data = rp.addNewReqProduct();
                        if (data === undefined || data === null) {
                            res.cmd = body.cmd;
                            res.data = null;
                            res.error = "Произошла ошибка при создании заявки на изделие";
                            res.sess_code = body.sess_code;
                        }
                        else {
                            res.cmd = body.cmd;
                            res.data = null;
                            res.error = null;
                            res.sess_code = body.sess_code;
                        }
                    }
                    return [3, 70];
                case 63:
                    rp = new ReqProduct_1.ReqProduct(body.args, body.sess_code);
                    return [4, rp.selectReqProduct()];
                case 64:
                    data = _b.sent();
                    if (data === null) {
                        res.cmd = body.cmd;
                        res.data = null;
                        res.error = "Заявки еще не добавлены";
                        res.sess_code = body.sess_code;
                    }
                    else {
                        res.cmd = body.cmd;
                        res.data = data;
                        res.error = null;
                        res.sess_code = body.sess_code;
                    }
                    return [3, 70];
                case 65:
                    rp = new ReqProduct_1.ReqProduct(body.args, body.sess_code);
                    return [4, rp.changeNewReqProduct()];
                case 66:
                    data = _b.sent();
                    if (data === undefined) {
                        res.cmd = body.cmd;
                        res.data = null;
                        res.error = "Произошла ошибка при измененнии заявки";
                        res.sess_code = body.sess_code;
                    }
                    else {
                        res.cmd = body.cmd;
                        res.data = null;
                        res.error = null;
                        res.sess_code = body.sess_code;
                    }
                    return [3, 70];
                case 67:
                    rp = new ReqProduct_1.ReqProduct(body.args, body.sess_code);
                    return [4, rp.sendToMailRequest()];
                case 68:
                    data = _b.sent();
                    return [3, 70];
                case 69:
                    {
                        res.cmd = body.cmd;
                        res.error = "\u041A\u043E\u043C\u0430\u043D\u0434\u0430 \"".concat(body.cmd, "\" \u043D\u0435 \u0440\u0430\u0441\u043F\u043E\u0437\u043D\u0430\u043D\u0430");
                        (res.data = []), (res.user_sess_code = body.sess_code);
                    }
                    _b.label = 70;
                case 70: return [2, JSON.stringify(res)];
            }
        });
    });
}
//# sourceMappingURL=Router.js.map