import React, { useEffect, useState } from "react";
import { AboutPageMainBlock } from "../../../../components/AboutPageMainBlock/AboutPageMainBlock";
import { AboutPageCompanyInfo } from "../../../../components/AboutPageCompanyInfo/AboutPageCompanyInfo";
import { FeedbackForm } from "../../../../components/FeedbackForm/FeedbackForm";
import { AboutAdvantages } from "../../../../components/AboutAdvantages/AboutAdvantages";
import Cookies from "js-cookie";
import { User } from "../../../../shared/types/user.types";
import { api } from "../../../../api/api";
import { APICOMMAND } from "../../../../shared/types/command.types";
import config from '../../../../../config/config.json'
import { InputField } from "../../../../shared/types/inputField.types";

export const AboutPage = () => {

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
            <AboutPageMainBlock />
            <AboutPageCompanyInfo />
            <AboutAdvantages />
            <FeedbackForm user={user} userSess={userSess} fields={fields} fieldsToSend={['lastname', 'phone', 'email']} fieldsToValidate={['lastname', 'phone', 'email']} formType="mail" />
        </>
    )
}