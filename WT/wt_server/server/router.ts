import { User } from '../dbase/User';
import { Task } from '../dbase/Task';
import { Status } from '../dbase/Status';
import { Priority } from '../dbase/Priority';

export async function Router(body: any) {
    //console.log(body);

    // JSON-объект данных ответа от сервера
    var res: any = {
        cmd: "",
        error: "",
        data: [],
        user_sess: ""
    };

    var data: any;

    console.log(body);
    //Поиск команды запроса
    switch (body.cmd) {

        //Проверка
        case "check":
            {
                res.cmd = body.cmd;
                res.data = "ok";
                res.error = null;
                res.user_sess = null;
            }
            break;

        //Регистрация в программе WorkTrack
        case "add_user":
            {
                var user = new User(body.args);
                data = await user.insertUser();
                if (data === undefined || data.length === 0 || data[0] === undefined) {
                    res.cmd = body.cmd;
                    res.error = "Ошибка при создании пользователя";
                    res.data = null;
                } else {
                    res.cmd = body.cmd;
                    res.error = null;
                    res.data = data;
                }
            } break;

        //Авторизация в программе 
        case "auth":
            {
                var user = new User(body.args);
                var user_sess_code = await user.insertSessionCode();

                if (user_sess_code === undefined) {
                    res.cmd = body.cmd;
                    res.error =
                        "Проверте правильность данных или данного пользователя не существует";
                    res.data = null;
                    res.user_sess_code = "";
                }
                else {
                    data = await user.selectUser();
                    res.cmd = body.cmd;
                    res.error = null;
                    res.data = data;
                    res.user_sess = user_sess_code
                }
            } break;


        //Авторизация в программе по коду сессии
        case "auth_code":
            {
                var user = new User(body.args);
                data = await user.selectUser();
                if (data.length === 0 || data[0] === undefined) {
                    res.cmd = body.cmd;
                    res.error =
                        "Данного кода сессии не существует или закончилось время использования кода";
                    res.data = null;
                    res.user_sess_code = "";

                    // Удаление кода сессии из базы данных
                    await user.deleteSessionCode();
                } else {
                    res.cmd = body.cmd;
                    res.error = null;
                    res.data = data;
                    res.user_sess = body.args.user_sess;
                }
            } break;


        //Сброс пароля 
        case "recover_pass":
            {
                var user = new User(body.args);
                data = await user.recoverPass();

                if (data.length === 0 || data[0] === undefined) {
                    res.cmd = body.cmd;
                    res.error = "Проверьте правильность логина и фамилии";
                    res.data = null;
                } else {
                    res.cmd = body.cmd;
                    res.error = null;
                    res.data = data;
                }


            } break;

        //Получение пользователей для назначенй задачи
        case "get_users": {
            var user = new User(body.args);
            data = await user.selectAllUser();
            if (data.length === 0 || data[0] === undefined) {
                res.cmd = body.cmd;
                res.error = "Пользователей нет";
                res.data = null;
            } else {
                res.cmd = body.cmd;
                res.error = null;
                res.data = data;
            }
        } break;

        //Регистрация новой задачи
        case "add_task":
            {
                var task = new Task(body.args);
                data = await task.insertTask();
                if (data == 0 || data.length === 0 || data[0] === undefined) {
                    res.cmd = body.cmd;
                    res.error = "Ошибка при создании задачи";
                    res.data = null;
                } else {
                    res.cmd = body.cmd;
                    res.error = null;
                    res.data = data;
                }
            } break;

        //Получение задач для исполнителя 
        case "get_executor_task":
            {
                var task = new Task(body.args);
                data = await task.selectExecutorTask();
                if (data.length === 0 || data[0] === undefined) {
                    res.cmd = body.cmd;
                    res.error = "Ошибка при получении задач или они отсутствуют";
                    res.data = null;
                } else {
                    res.cmd = body.cmd;
                    res.error = null;
                    res.data = data;
                }
            } break;

        //Получение задач для автора задачи 
        case "get_author_task":
            {
                var task = new Task(body.args);
                data = await task.selectAuthorTask();
                if (data.length === 0 || data[0] === undefined) {
                    res.cmd = body.cmd;
                    res.error = "Ошибка при получении задач или они отсутствуют";
                    res.data = null;
                } else {
                    res.cmd = body.cmd;
                    res.error = null;
                    res.data = data;
                }
            } break;

        //Обновленние данных по задачам
        case "update_task": {
            var task = new Task(body.args);
            data = await task.updateTask();
            if (data.length === 0 || data[0] === undefined) {
                res.cmd = body.cmd;
                res.error = "Ошибка при изменении статуса";
                res.data = null;
            } else {
                res.cmd = body.cmd;
                res.error = null;
                res.data = data;
            }
        } break;


        //Обновление данных по задачам для автора 
        case "update_task_author": {
            var task = new Task(body.args);
            data = await task.updateAuthorTask();
            if (data.length === 0 || data[0] === undefined) {
                res.cmd = body.cmd;
                res.error = "Ошибка при изменении статуса";
                res.data = null;
            } else {
                res.cmd = body.cmd;
                res.error = null;
                res.data = data;
            }
        } break;

        //Получение статусов задач 
        case "get_status": {
            var status = new Status(body.args);
            data = await status.selectStatus();
            if (data.length === 0 || data[0] === undefined) {
                res.cmd = body.cmd;
                res.error = "Ошибка при получении статусов задач";
                res.data = null;
            } else {
                res.cmd = body.cmd;
                res.error = null;
                res.data = data;
            }
        } break;

        //Получение статусов приоритета
        case "get_priority": {
            var priority = new Priority(body.args);
            data = await priority.selectPriority();
            if (data.length === 0 || data[0] === undefined) {
                res.cmd = body.cmd;
                res.error = "Ошибка при получении статусов приорита";
                res.data = null;
            } else {
                res.cmd = body.cmd;
                res.error = null;
                res.data = data;
            }
        } break;

        //Обновление статуса приоритета
        case "update_task_priority": {
            var task = new Task(body.args);
            data = await task.updatePriorityTask();
            if (data.length === 0 || data[0] === undefined) {
                res.cmd = body.cmd;
                res.error = "Ошибка при изменении приоритета";
                res.data = null;
            } else {
                res.cmd = body.cmd;
                res.error = null;
                res.data = data;
            }
        } break;



        default: {
            res.cmd = body.cmd;
            res.error = `Команда "${body.cmd}" не распознана`;
            res.data = null;
        }
    }
    return JSON.stringify(res);
}