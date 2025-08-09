import React, { useEffect, useState } from "react";
import { FeedbackForm } from "../../../../components/FeedbackForm/FeedbackForm";
import { HomePageCatalog } from "../../../../components/HomePageCatalog/HomePageCatalog"
import './CatalogPage.css'
import { InputField } from "../../../../shared/types/inputField.types";
import { User } from "../../../../shared/types/user.types";
import Cookies from "js-cookie";
import { api } from "../../../../api/api";
import { APICOMMAND } from "../../../../shared/types/command.types";
import config from '../../../../../config/config.json'

export const CatalogPage = () => {

    const [user, setUser] = useState<User | null>(null)
    const userSess = Cookies.get('user_sess')

    useEffect(() => {
        async function fetchUserForSess() {
            const response = await api(APICOMMAND.authCode, {}, String(userSess), config)
            const userData = await response.json()
            setUser(userData.data)
        }
        fetchUserForSess()
    }, [])

    const fields: InputField[] = [
        {
            name: 'lastname',
            type: 'text',
            placeholder: 'Имя:'
        },
        {
            name: 'phone',
            type: 'tel',
            placeholder: 'Телефон:'
        },
        {
            name: 'email',
            type: 'email',
            placeholder: 'E-mail:'
        },
    ]

    return (
        <>
            <div className="catalog_pd"></div>
            <HomePageCatalog />
            <FeedbackForm user={user} userSess={userSess} fields={fields} fieldsToSend={['lastname', 'phone', 'email']} fieldsToValidate={['lastname', 'phone', 'email']} formType="mail"/>
        </>
    )
}