import { useNavigate } from "react-router";
import { useAppDispatch, useAppSelector } from "../../store/hooks/hooks";
import { logoutUser } from "../../store/slices/userSlice";
import { Button } from "../../ui/Button/Button";
import "./SettingsAccount.css";

export const SettingsAccount = () => {

  const dispatch = useAppDispatch()
  const user = useAppSelector(state => state.user.user)

  const nav = useNavigate()

  return (
    <>
      <ul className="settings_list">
        <li className="settings_item">
          <div className="wrapper_initials">
            <p className="initials">{user ? user.name.charAt(0).toUpperCase() + user.surname.charAt(0).toUpperCase() : ''}</p>
          </div>
          <div className="wrapper_user_info">
            <span className="item_span">Имя Фамилия</span>
            <p className="item_descr">{user ? `${user.name.charAt(0).toUpperCase() + user.name.slice(1).toLowerCase()}` + ' ' + `${user.surname.charAt(0).toUpperCase() + user.surname.slice(1).toLowerCase()}` : ''}</p>
          </div>
        </li>
        <li className="settings_item">
          <div className="wrapper_initials">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M21 3C21.5523 3 22 3.44772 22 4V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V19H20V7.3L12 14.5L2 5.5V4C2 3.44772 2.44772 3 3 3H21ZM8 15V17H0V15H8ZM5 10V12H0V10H5ZM19.5659 5H4.43414L12 11.8093L19.5659 5Z"
                fill="white"
              />
            </svg>
          </div>
          <div className="wrapper_user_info">
            <span className="item_span">Электронная почта</span>
            <p className="item_descr">{user ? user.email : ''}</p>
          </div>
        </li>
      </ul>
      <Button variant={"primary"} disabled={false} onClick={() => {
        dispatch(logoutUser())
        nav('/')
      }}>
        Выйти из аккаунта
      </Button>
    </>
  );
};
