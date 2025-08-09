import React, { FC } from "react";
import './ManagerCard.css'

interface ManagerCardProps {
    name: string,
    surname: string,
    tel: string,
    email: string,
    role: string,
}

export const ManagerCard: FC<ManagerCardProps> = ({ name, surname, tel, email, role }) => {
    
    return (
        <div className="manager_card_wrapper_all_info">
            <div className="manager_card_wrapper_btns">
                <button className="manager_card_btn btn-edit"></button> 
                <button className="manager_card_btn btn-delete"></button>
            </div>
            <div className="manager_card_wrapper_img"></div>
            <h4 className="manager_card_title">
                {name.charAt(0).toLocaleUpperCase() + name.slice(1).toLocaleLowerCase() + ' ' + surname.charAt(0).toLocaleUpperCase() + surname.slice(1).toLocaleLowerCase()}
            </h4>
            <p className="manager_card_descr">
                Телефон: {tel}
            </p>
            <p className="manager_card_descr">
                E-mail: {email}
            </p>
            <p className="manager_card_descr">
                Роль: {role === '2' ? 'Менеджер' : 'Админ'}
            </p>
        </div>
    )
}