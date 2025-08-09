export enum APICOMMAND {
    // Регистрация
    ADDUSER = 'add_user',
    
    // Авторизация
    AUTHUSER = 'auth',
    
    // Сброс пароля
    RECOVERPASS = 'recover_pass',
    
    // Получение пользователей для назначения задачи
    GETUSERS = 'get_users',
    
    // Регистрация новой задачи
    ADDTASK = 'add_task',
    
    // Получение задач для исполнителя
    GETEXECUTORTASK = 'get_executor_task',

    // Получение задач для автора задачи
    GETAUTHORTASK = 'get_author_task',

    // Обновление данных по задачам
    UPDATETASK = 'update_task',

    // Обновление данных по задачам для автора
    UPDATETASKAUTHOR = 'update_task_author',

    // Получение статусов 
    GETSTATUS = 'get_status',

    // Получение статусов приоритета
    GETPRIORITY = 'get_priority',

    // Обновление статусов приоритета
    UPDATETASKPRIORITY = 'update_task_priority',

}