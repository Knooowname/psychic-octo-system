export const users_table = {
    sql: `
    DROP TABLE IF EXISTS user_sess;
    CREATE TABLE user_sess (
        id              BIGSERIAL NOT NULL PRIMARY KEY,
        uid             BIGSERIAL DEFAULT(0),
        sess_code       VARCHAR(250) DEFAULT('')
    );
    COMMENT ON TABLE user_sess IS 'Сессии авторизованных пользователей';
    COMMENT ON COLUMN user_sess.id IS 'Идентификатор сессии';
    COMMENT ON COLUMN user_sess.uid IS 'Идентификатор пользователя';
    COMMENT ON COLUMN user_sess.id IS 'Сгенерированная сессия';
    `,
    args: new Array()
};
