// import { useState } from 'react'
import { useState } from 'react'
import './AccountPage.css'
import { FavoritesMoviesAccount } from '../../components/FavoriteMoviesAccount/FavoriteMoviesAccount'
import { SettingsAccount } from '../../components/SettingsAccount/SettingsAccount'

export const Account = () => {
    
    const [stateAccount, setStateAccount] = useState<string>('favorites')

    // const handleClick = () => {
    //     setStateAccount((prevstate: string) => 
    //         prevstate === 'favorites' ? 'settings' : 'favorites'
    //     )
    // }

    return (
        <div className='wrapper_account_info'>
            <h1 className="account_title">
                Мой аккаунт
            </h1>
            <ul className="account_list">
                <li className="account_item">
                    <button className={`account_btn favorites_icon_btn ${stateAccount === 'favorites' ? 'btn-active' : ''}`} onClick={() => setStateAccount('favorites')}>
                        Избранные фильмы
                    </button>
                </li>
                <li className="account_item">
                    <button className={`account_btn user_icon_btn ${stateAccount === 'settings' ? 'btn-active' : ''}`} onClick={() => setStateAccount('settings')}>
                        Настройка аккаунта
                    </button>
                </li>
            </ul>
            {stateAccount === 'favorites' ? <FavoritesMoviesAccount/> : <SettingsAccount/>}
        </div>
    )
}




// const [authType, setAuthType] = useState<string>("register");

//   const handleClick = () => {
//     setAuthType((prevState) =>
//       prevState === "register" ? "auth" : "register",
//     );
//   };

//   return (
//     <div className="auth-form">
//       <p className="auth-form__title">
//         {authType === "register" ? "Регистрация" : "Авторизация"}
//       </p>
//       {authType === "register" ? <RegisterForm /> : <LoginForm />}
//       <div className="auth-form__info">
//         <span>
//           {authType === "register" ? "Уже есть аккаунт?" : "Ещё нет аккаунта?"}
//         </span>
//         <button className="auth-form__button" onClick={handleClick}>
//           {authType === "register" ? "Войти" : "Создать аккаунт"}
//         </button>
//       </div>
//     </div>
//   );



// const todosReducer = createReducer([], (builder) => {
//   builder
//     .addCase('ADD_TODO', (state, action) => {
//       // "mutate" the array by calling push()
//       state.push(action.payload)
//     })
//     .addCase('TOGGLE_TODO', (state, action) => {
//       const todo = state[action.payload.index]
//       // "mutate" the object by overwriting a field
//       todo.completed = !todo.completed
//     })
//     .addCase('REMOVE_TODO', (state, action) => {
//       // Can still return an immutably-updated value if we want to
//       return state.filter((todo, i) => i !== action.payload.index)
//     })
// })