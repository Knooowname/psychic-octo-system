import React, { useState } from "react";
import './RegisterForm.css'
import { LogRegInput } from "../ui/LogRegInput/LogRegInput";
import { Button } from "../ui/Button/Button";
import z from 'zod'
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod'
import { api } from "../../api/api";
import { APICOMMAND } from "../../shared/types/command.types";
import config from '../../../config/config.json'

export const registerFormSchema = z.object({
    lastname: z.string().min(1, 'Поле не может быть пустым'),
    firstname: z.string().min(1, 'Поле не может быть пустым'),
    email: z.email().min(1, 'Поле не может быть пустым'),
    password: z.string().min(1, 'Поле не может быть пустым'),
    phone: z.string().min(1, 'Поле не может быть пустым'),
    address: z.string().min(1, 'Поле не может быть пустым'),
    role_id: z.string().min(1, 'Поле не может быть пустым'),
})

export type RegisterFormType = z.infer<typeof registerFormSchema>

export const RegisterForm = () => {

    const { register, handleSubmit, formState: { errors }, setValue } = useForm<RegisterFormType>({
        resolver: zodResolver(registerFormSchema),
        defaultValues: {
            role_id: '3'
        }
    })

    const onSubmit = async (data: RegisterFormType) => {
        const response = await api(APICOMMAND.register, data, "", config)
        const userData = await response?.json()
    }

    return (
        <div className='login_form_wrapper_abs'>
            <div className='loginform_wrapper'>
                <h1 className='loginform_title'>Регистрация</h1>
                <form className='loginform' onSubmit={handleSubmit(onSubmit)}>
                    <LogRegInput type="text" placeholder="Введите имя:" label="Ваше имя" height="50px" {...register('firstname')} errorMessage={errors.firstname?.message}/>
                    <LogRegInput type="text" placeholder="Введите фамилию:" label="Ваша фамилия" height="50px" {...register('lastname')} errorMessage={errors.lastname?.message}/>
                    <LogRegInput type="email" placeholder="Введите email:" label="Ваша почта" height="50px" {...register('email')} errorMessage={errors.email?.message}/>
                    <LogRegInput type="password" placeholder="Введите пароль:" label="Ваш пароль" height="50px" {...register('password')} errorMessage={errors.password?.message}/>
                    <LogRegInput type="tel" placeholder="Введите телефон:" label="Ваш телефон" height="50px" {...register('phone')} errorMessage={errors.phone?.message}/>
                    <LogRegInput type="text" placeholder="Введите адрес:" label="Ваш адрес" height="50px" {...register('address')} errorMessage={errors.address?.message}/>
                    <Button type="submit" width='220px' fontSize='16px' fontWeight='600'>
                        Отправить
                    </Button>
                </form>
                <a href="/auth" className='register_button'>Авторизация</a>
            </div>
        </div>
    )
}