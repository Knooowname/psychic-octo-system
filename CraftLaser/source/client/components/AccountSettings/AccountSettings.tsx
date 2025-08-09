import React, { FC } from "react"
import './AccountSettings.css'
import { Button } from "../ui/Button/Button"
import { api } from "../../api/api"
import { APICOMMAND } from "../../shared/types/command.types"
import config from '../../../config/config.json'
import Cookies from "js-cookie"
import { User } from "../../shared/types/user.types"

interface AccountSettingsProps {
  userSess: string,
  user: User | null,
  openModal: () => void
}

export const AccountSettings: FC<AccountSettingsProps> = ({ user, userSess, openModal }) => {

  const handleClickLogout = () => {
    api(APICOMMAND.logout, {}, userSess, config)
    Cookies.remove('user_sess')
    window.location.replace('/')
  }

  return (
    <div className="account_settings_wrapper_all">
      <div className="account_settings_wrapper_mb">
        <ul className="account_settings_list">
          <li className="account_settings_item">
            <div className="account_settings_wrapper_initials">
              <p className="account_settings_initials_descr">
                {`${user.first_name.charAt(0).toLocaleUpperCase()}${user.last_name.charAt(0).toLocaleUpperCase()}`}
              </p>
            </div>
            <div className="account_settings_wrapper_info">
              <span className="account_settings_info_span">
                Имя Фамилия
              </span>
              <p className="account_settings_info_descr">
                {`${user.first_name.charAt(0).toLocaleUpperCase() + user.first_name.slice(1).toLocaleLowerCase()} ${user.last_name.charAt(0).toLocaleUpperCase() + user.last_name.slice(1).toLocaleLowerCase()}`}
              </p>
            </div>
          </li>
          <li className="account_settings_item">
            <div className="account_settings_wrapper_initials account_settings_email_icon_wrapper">
            </div>
            <div className="account_settings_wrapper_info">
              <span className="account_settings_info_span">
                Электронная почта
              </span>
              <p className="account_settings_info_descr">
                {user.email}
              </p>
            </div>
          </li>
        </ul>
      </div>
      <div className="account_settings_wrapper_btns">
        <Button onClick={handleClickLogout}>
          Выйти из аккаунта
        </Button>
        <Button onClick={() => openModal()}>
          Изменить данные
        </Button>
      </div>
    </div>
  )
}