import e from "express";
import { Users } from "../config/dbase/Users"
import { UserRoles } from "../config/dbase/UserRoles"
import { Status } from "../config/dbase/Status"
import { Material } from "../config/dbase/Material"
import { Filters } from "../config/dbase/Filters"
import { Reviews } from "../config/dbase/Reviews"
import { ProductGroups } from "../config/dbase/ProductGroups"
import { Layout } from "../config/dbase/Layout"
import { Product } from "../config/dbase/Product"
import { ReqProduct } from "../config/dbase/ReqProduct"

export async function Router(body: any) {
    console.log(body);

    // JSON-объект данных ответа от сервера
    var res: any = {
        cmd: "",
        error: "",
        data: [],
        sess_code: "",
    };

    var data: any;

    switch (body.cmd) {

        //------------------------------------------------------------------------РЕГИСТРАЦИЯ И ОТПРАВКА ПИСЬМА ДЛЯ ПОДТВЕРЖДЕНИЯ ПОЧТЫ
        case "Regist": {
            var u = new Users(body.args, body.sess_code);
            data = await u.regist();

            if (data === null || data === undefined) {
                res.cmd = body.cmd;
                res.code = body.sess_code;
                res.data = null;
                res.error =
                    "Пользователь с таким email уже существует";
            }
            //Иначе нет ошибки и данные успешно сохранены
            else {
                res.cmd = body.cmd;
                res.code = body.sess_code;
                res.data = null;
                res.error = null;
            }
        } break;
        //------------------------------------------------------------------------АВТОРИЗАЦИЯ ПО ЛОГИНУ И ПАРОЛЮ
        case "Auth": {
            var u = new Users(body.args, body.sess_code);
            //Добавление кода сессии
            var user_sess_code = await u.addSessCode();

            if (user_sess_code === undefined) {
                res.cmd = body.cmd;
                res.error = "Данный пользователь не зарегистрирован"
                res.data = null;
                res.sess_code = body.sess_code;
            }
            else {
                data = await u.auth();
                res.cmd = body.cmd;
                res.data = data;
                res.error = null;
                res.sess_code = user_sess_code;
            }
        } break;
        //------------------------------------------------------------------------АВТОРИЗАЦИЯ ПО КОДУ СЕССИИ
        case "AuthCode": {
            var u = new Users(body.args, body.sess_code)
            data = await u.auth();
            if (data === undefined) {
                res.cmd = body.cmd;
                res.error = "Данный пользователь не зарегистрирован"
                res.data = null;
                res.sess_code = null;
            }
            else {
                data = await u.auth();
                res.cmd = body.cmd;
                res.data = data;
                res.error = null;
                res.sess_code = body.sess_code;
            }

        } break;
        //------------------------------------------------------------------------ВЫХОД ИЗ АККАУНТА 
        case "Logout": {
            var u = new Users(body.args, body.sess_code);
            data = await u.deleteSessCode();
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
        } break;
        //------------------------------------------------------------------------ПОДТВЕРЖДЕНИЕ EMAIL ПОСЛЕ НАЖАНИЯ НА ССЫЛКУ В ПИСЬМЕ
        case "ConfirmMail": {
            var u = new Users(body.args, body.sess_code);
            data = await u.confirmMail();
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

        } break;
        //------------------------------------------------------------------------СБРОС ПАРОЛЯ ЧЕРЕЗ ПОЧТУ ОТПРАВКА ПИСЬМА ДЛЯ ОТКРЫТИЯ СТРАНИЦЫ СБРОСА
        case "SendMailToRecoverPass": {
            var u = new Users(body.args, body.sess_code);
            data = await u.sendMailToRecoverPass();
            if (data === undefined) {
                res.cmd = body.cmd;
                res.data = null;
                res.error = "Пользователя с данным email не существует"
                res.sess_code = ""
            }
            else {
                res.cmd = body.cmd;
                res.data = null;
                res.error = null;
                res.sess_code = "";
            }
        } break;
        //------------------------------------------------------------------------СБРОС ПАРОЛЯ ПОСЛЕ НАЖАТИЯ НА ССЫЛКУ В ПИСЬМЕ 
        case "RecoverPass": {
            var u = new Users(body.args, body.sess_code);
            data = await u.recoverPass();
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
        } break;
        //------------------------------------------------------------------------ИЗМЕНЕНИЕ ПОЛЬЗОВАТЕЛЬСКИХ ДАННЫХ 
        case "ChangeUserData": {
            var u = new Users(body.args, body.sess_code);
            data = await u.changeDataUser();
            if (data === undefined) {
                res.cmd = body.cmd;
                res.data = null;
                res.error = "Произошла ошибка при изменении данных пользователя";
                res.sess_code = body.sess_code;
            }
            else {
                data = await u.auth();
                if (data === undefined) {
                    res.cmd = body.cmd;
                    res.error = "Произошла непредвиденная ошибка"
                    res.data = null;
                    res.sess_code = null;
                }
                else {
                    data = await u.auth();
                    res.cmd = body.cmd;
                    res.data = data;
                    res.error = null;
                    res.sess_code = body.sess_code;
                }
            }
        } break;

        //------------------------------------------------------------------------ЗАПРОС НА УДАЛЕНИЕ МАНАГЕРА 
        case "DeletedManager":
            { 

                var u = new Users(body.args, body.sess_code)
                data = await u.deleteManager();
                if(data === undefined)
                {
                    res.cmd = body.cmd;
                    res.error = "Произошла ошибка при удалении аккаунта менеджера";
                    res.data = null;
                    res.sess_code = body.sess_code;
                }
                else{
                    res.cmd = body.cmd;
                    res.error = null;
                    res.data = data;
                    res.sess_code = body.sess_code;

                }
            } break;
        //------------------------------------------------------------------------ЗАПРОС НА ПОЛУЧЕНИЕ ВСЕХ ПОЛЬЗОВАТЕЛЕЙ
        case "SelectUsers": {
            var u = new Users(body.args, body.sess_code);
            data = await u.selectUsers()
            res.cmd = body.cmd;
            res.data = data;
            res.error = null;
            res.sess_code = body.sess_code;

        } break;
        //------------------------------------------------------------------------ЗАПРОС НА ПОЛУЧЕНИЕ ВСЕХ РОЛЕЙ
        case "SelectUserRoles": {
            var ur = new UserRoles(body.args, body.sess_code);
            data = await ur.selectRoles()
            res.cmd = body.cmd;
            res.data = data;
            res.error = null;
            res.sess_code = body.sess_code;

        } break;
        //------------------------------------------------------------------------ЗАПРОС НА ПОЛУЧЕНИЕ ВСЕХ СТАТУСОВ
        case "SelectStatus": {
            var s = new Status(body.args, body.sess_code);
            data = await s.selectStatus()
            res.cmd = body.cmd;
            res.data = data;
            res.error = null;
            res.sess_code = body.sess_code;

        } break;
        //------------------------------------------------------------------------ЗАПРОС НА ПОЛУЧЕНИЕ ВСЕХ МАТЕРИАЛОВ
        case "SelectMaterial": {
            var m = new Material(body.args, body.sess_code);
            data = await m.selectMaterial()
            res.cmd = body.cmd;
            res.data = data;
            res.error = null;
            res.sess_code = body.sess_code;

        } break;
        //------------------------------------------------------------------------ДОБАВЛЕНИЕ НОВЫХ МАТЕРИАЛОВ 
        case "AddNewMaterial": {
            var m = new Material(body.args, body.sess_code);
            data = await m.addNewMaterial();
            if (data === undefined || data === null) {
                res.cmd = body.cmd;
                res.data = null;
                res.error = "Такое значение материала уже существует"
                res.sess_code = body.sess_code
            }
            else {
                res.cmd = body.cmd;
                res.data = null;
                res.error = null;
                res.sess_code = body.sess_code
            }
        } break;
        //------------------------------------------------------------------------ЗАПРОС НА ПОЛУЧЕНИЕ ВСЕХ ФИЛЬТРОВ
        case "SelectFilters": {
            var f = new Filters(body.args, body.sess_code);
            data = await f.selectFilters()
            if (data === null) {
                res.cmd = body.cmd;
                res.data = null;
                res.error = "Элементов фильтрации еще нет";
                res.sess_code = body.sess_code
            }
            else {
                res.cmd = body.cmd;
                res.data = data;
                res.error = null;
                res.sess_code = body.sess_code
            }

        } break;
        //------------------------------------------------------------------------ДОБАВЛЕНИЕ НОВОГО ФИЛЬТРА
        case "AddNewFilter": {
            var f = new Filters(body.args, body.sess_code);
            data = await f.addNewFilter();
            if (data === undefined || data === null) {
                res.cmd = body.cmd;
                res.data = null;
                res.error = "Такое значение фильтра уже существует"
                res.sess_code = body.sess_code
            }
            else {
                res.cmd = body.cmd;
                res.data = null;
                res.error = null;
                res.sess_code = body.sess_code
            }
        } break;
        //------------------------------------------------------------------------ЗАПРОС НА ПОЛУЧЕНИЕ ОТЗЫВОВ
        case "SelectReviews": {
            var r = new Reviews(body.args, body.sess_code)
            data = await r.selectReviews();
            if (data === null) {
                res.cmd = body.cmd;
                res.data = null;
                res.error = "Отзывов еще нет";
                res.sess_code = body.sess_code
            }
            else {
                res.cmd = body.cmd;
                res.data = data;
                res.error = null;
                res.sess_code = body.sess_code
            }
        } break;
        //------------------------------------------------------------------------ДОБАВЛЕНИЕ НОВОГО ОТЗЫВА
        case "AddNewReviews": {
            var r = new Reviews(body.args, body.sess_code)
            data = await r.addNewReviews()
            if (data === undefined) {
                res.cmd = body.cmd;
                res.data = null;
                res.error = "Произошла ошибка при создании отзыва"
                res.sess_code = body.sess_code
            }
            else {
                res.cmd = body.cmd;
                res.data = null;
                res.error = null;
                res.sess_code = body.sess_code
            }

        } break;
        //------------------------------------------------------------------------ДОБАВЛЕНИЕ НОВОЙ ГРУППЫ ИЗДЕЛИЙ
        case "AddNewProductGroups": {
            var pg = new ProductGroups(body.args, body.sess_code)
            data = await pg.addNewProductGroups()

            if (data === undefined || data === null) {
                res.cmd = body.cmd;
                res.data = null;
                res.error = "Такое значение группы уже существует"
                res.sess_code = body.sess_code
            }
            else {
                res.cmd = body.cmd;
                res.data = null;
                res.error = null;
                res.sess_code = body.sess_code
            }
        } break;
        //------------------------------------------------------------------------ЗАПРОС НА ПОЛУЧЕНИЕ ГРУПП ИЗДЕЛИЙ
        case "SelectProductGroups": {
            var pg = new ProductGroups(body.args, body.sess_code)
            data = await pg.selectProductGroups();
            if (data === null) {
                res.cmd = body.cmd;
                res.data = null;
                res.error = "Групп изделий еще нет ";
                res.sess_code = body.sess_code
            }
            else {
                res.cmd = body.cmd;
                res.data = data;
                res.error = null;
                res.sess_code = body.sess_code
            }
        } break;
        //------------------------------------------------------------------------ИЗМЕНЕНИЕ ДАННЫХ ГРУПП ИЗДЕЛИЙ
        case "ChangeProductGroups": {
            var pg = new ProductGroups(body.args, body.sess_code)
            data = await pg.changeProductGroups();
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
        } break;
        //------------------------------------------------------------------------ДОБАВЛЕНИЕ МАКЕТА ИЗДЕЛИЯ 
        case "AddNewLayout": {
            var l = new Layout(body.args, body.sess_code);
            data = await l.addNewLayout();
            if (data === undefined || data === null) {
                res.cmd = body.cmd;
                res.data = null;
                res.error = "Такой макет уже существует"
                res.sess_code = body.sess_code
            }
            else {
                res.cmd = body.cmd;
                res.data = null;
                res.error = null;
                res.sess_code = body.sess_code
            }
        } break;
        //------------------------------------------------------------------------ДОБАВЛЕНИЕ НОВОГО ИЗДЕЛИЯ
        case "AddNewProduct": {
            var p = new Product(body.args, body.sess_code)
            data = await p.addNewProduct()

            if (data === undefined || data === null) {
                res.cmd = body.cmd;
                res.data = null;
                res.error = "Прикрепленный документ или данное изделие уже существует"
                res.sess_code = body.sess_code
            }
            else {
                res.cmd = body.cmd;
                res.data = null;
                res.error = null;
                res.sess_code = body.sess_code
            }
        } break;
        //------------------------------------------------------------------------ЗАПРОС НА ПОЛУЧЕНИЕ ВСЕХ ИЗДЕЛИЙ
        case "SelectProduct": {
            var p = new Product(body.args, body.sess_code);
            data = await p.selectProduct()
            if (data === null) {
                res.cmd = body.cmd;
                res.data = null;
                res.error = "Иделия еще не добавлены";
                res.sess_code = body.sess_code
            }
            else {
                res.cmd = body.cmd;
                res.data = data;
                res.error = null;
                res.sess_code = body.sess_code
            }
        } break;
        //------------------------------------------------------------------------ЗМЕНЕНИЕ ДАННЫХ ОБ ИЗДЕЛИИ
        case "ChangeProduct": {
            var p = new Product(body.args, body.sess_code);
            data = await p.changeProduct()
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
        } break;

        case "AddNewReqProduct": {
            var rp = new ReqProduct(body.args, body.sess_code)
            data = rp.addNewReqProduct()
            if (data === undefined || data === null) {
                res.cmd = body.cmd;
                res.data = null;
                res.error = "Произошла ошибка при создании заявки на изделие"
                res.sess_code = body.sess_code
            }
            else {
                res.cmd = body.cmd;
                res.data = null;
                res.error = null;
                res.sess_code = body.sess_code
            }
        } break;
        case "SelectReqProduct": {
            var rp = new ReqProduct(body.args, body.sess_code);
            data = await rp.selectReqProduct()
            if (data === null) {
                res.cmd = body.cmd;
                res.data = null;
                res.error = "Заявки еще не добавлены";
                res.sess_code = body.sess_code
            }
            else {
                res.cmd = body.cmd;
                res.data = data;
                res.error = null;
                res.sess_code = body.sess_code
            }
        } break;
        case "ChangeReqProduct": {
            var rp = new ReqProduct(body.args, body.sess_code);
            data = await rp.changeNewReqProduct()
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
        } break;

        case "SendToMailRequest": {
            var rp = new ReqProduct(body.args, body.sess_code);
            data = await rp.sendToMailRequest();

        } break;


        //-----------------------------------------ДРУГИЕ КОДЫ, КОТОРЫЕ НЕ ПРОПИСАНЫ
        default: {
            res.cmd = body.cmd;
            res.error = `Команда "${body.cmd}" не распознана`;
            (res.data = []), (res.user_sess_code = body.sess_code);
        }



    }
    return JSON.stringify(res);
}