export const users_sess_table = {
    sql: `
    DROP TABLE IF EXISTS user_sess;
    CREATE TABLE user_sess (
        id              BIGSERIAL NOT NULL PRIMARY KEY,
        user_id             BIGINT DEFAULT(0),
        sess_code       TEXT DEFAULT('')
    );
    COMMENT ON TABLE user_sess IS 'Сессии авторизованных пользователей';
    COMMENT ON COLUMN user_sess.id IS 'Идентификатор сессии';
    COMMENT ON COLUMN user_sess.user_id IS 'Идентификатор пользователя';
    COMMENT ON COLUMN user_sess.id IS 'Сгенерированная сессия';
    `,
    args: new Array()
};
