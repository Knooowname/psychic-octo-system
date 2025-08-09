import React, { useState } from 'react';
import './LoginForm.css'
import { LogRegInput } from "../ui/LogRegInput/LogRegInput";
import { Button } from "../ui/Button/Button";
import z from 'zod'
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod'
import { api } from '../../api/api';
import { APICOMMAND } from '../../shared/types/command.types';
import config from '../../../config/config.json'
import Cookies from 'js-cookie';
import { useAppDispatch } from '../../redux/hooks/useAppDispatch';
import { setUser } from '../../redux/reducers/userSlice';

export const loginFormSchema = z.object({
    email: z.string().min(1, 'Поле не может быть пустым'),
    password: z.string().min(1, 'Поле не может быть пустым'),
})

export type LoginFormType = z.infer<typeof loginFormSchema>

export const LoginForm = () => {

    const dispatch = useAppDispatch()

    const {register, handleSubmit, formState: {errors}} = useForm<LoginFormType>({
        resolver: zodResolver(loginFormSchema)
    })

    const onSubmit = async (data: LoginFormType) => {
        const response = await api(APICOMMAND.auth, data, "", config)

        if(!response.ok) {
            return console.log('Произошла ошибка авторизации')
        }
        
        const userData = await response?.json()

        dispatch(setUser(userData.data))

        Cookies.set('user_sess', userData.sess_code)

        console.log(userData)

        if(userData.error === null) {
            if(userData.data.role_id === '3') {
                window.location.replace('/')
            } else {
                window.location.replace('/admin')
            }
        }

    }

    return (
        <div className='login_form_wrapper_abs'>
            <div className='loginform_wrapper'>
                <h1 className='loginform_title'>Авторизация</h1>
                <form className='loginform' onSubmit={handleSubmit(onSubmit)}>
                    <LogRegInput type="text" placeholder="Введите login:" label="Ваш login" height='50px' {...register('email')} errorMessage={errors.email?.message}/>
                    <LogRegInput type="password" placeholder="Введите пароль:" label="Ваш пароль" height="50px" {...register('password')} errorMessage={errors.password?.message}/>
                    <Button type="submit" width='220px' fontSize='16px' fontWeight='600'>
                        Отправить
                    </Button>
                </form>
                <a className='register_button' href='/register'>Регистрация</a>
            </div>
        </div>
    )
}