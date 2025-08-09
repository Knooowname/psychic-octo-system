import React, { useEffect, useState } from "react"
import { HomePageMainBlock } from "../../../../components/HomePageMainBlock/HomePageMainBlock"
import { HomePageAboutBlock } from "../../../../components/HomePageAboutBlock/HomePageAboutBlock"
import { HomePageProductCategoriesBlock } from "../../../../components/HomePageProductCategoriesBlock/HomePageProductCategoriesBlock"
import { HomePageCatalog } from "../../../../components/HomePageCatalog/HomePageCatalog"
import { FeedbackForm } from "../../../../components/FeedbackForm/FeedbackForm"
import { User } from "../../../../shared/types/user.types"
import { api } from "../../../../api/api"
import Cookies from "js-cookie"
import { APICOMMAND } from "../../../../shared/types/command.types"
import config from '../../../../../config/config.json'
import { InputField } from "../../../../shared/types/inputField.types"

export const HomePage = () => {

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
            <HomePageMainBlock />
            <HomePageAboutBlock />
            <HomePageProductCategoriesBlock />
            <HomePageCatalog />
            <FeedbackForm user={user ? user : null} userSess={userSess} fields={fields} fieldsToSend={['lastname', 'phone', 'email']} fieldsToValidate={['lastname', 'phone', 'email']} formType="mail" />
        </>
    )
}