export enum APICOMMAND {
    // Регистрация
    register = 'Regist',

    // Авторизация
    auth = 'Auth',

    // Авторизация код сессии
    authCode = 'AuthCode',

    // Выход и удаление кода сессии
    logout = 'Logout',

    // Подтверждение почты после нажатия на ссылку в письме
    confirmEmail = 'ConfirmMail',

    // Сброс пароля через почту
    sendMailToRecoverPass = 'SendMailToRecoverPass',

    // Сброс пароля после нажатия на ссылку в письме
    recoverPass = 'RecoverPass',

    // Изменение пользовательских данных
    changeUserData = 'ChangeUserData',

    // Получение всех пользователей
    selectUsers = 'SelectUsers',

    // Получение ролей пользователей
    selectUserRoles = 'SelectUserRoles',

    // Получение статусов заказа
    selectStatus = 'SelectStatus',

    // Получение всех материалов изделий
    selectMaterial = 'SelectMaterial',

    // Добавление нового материала
    addNewMaterial = 'AddNewMaterial',

    // Получение всех фильтров
    selectFilters = 'SelectFilters',

    // Добавление нового фильтра
    addNewFilter = 'AddNewFilter',

    // Добавление отзыва
    addNewReviews = 'AddNewReviews',

    // Получение отзывов
    selectReviews = 'SelectReviews',

    // Добавление группы изделий
    addNewProductGroups = 'AddNewProductGroups',

    // Получение всех групп изделий
    selectProductGroups = "SelectProductGroups",

    // Изменение данных группы изделий
    changeProductGroups = 'ChangeProductGroups',

    // Добавление макета изделия для резки
    addNewLayout = 'AddNewLayout',

    // Добавление нового изделия
    addNewProduct = 'AddNewProduct',

    // Изменение данных изделия
    changeProduct = 'ChangeProduct',

    // Получение всех изделий
    selectProduct = 'SelectProduct',

    // Получение всех заявок
    selectReqProduct = 'SelectReqProduct',

    // Добавление новой заявки
    addNewReqProduct = 'AddNewReqProduct',

    // Изменение данных заявки
    changeReqProduct = 'ChangeReqProduct',

    // Отправка заявки в FeedbackForm
    sendToMailRequest = 'SendToMailRequest'
}