'use client'

import Link from "next/link"
import { FormInput } from "../ui/FormInput/FormInput"
import { Button } from "../ui/Button/Button"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { fetchConfig } from "@/api/fetchConfig"
import { api } from "@/pages/api/api"
import { APICOMMAND } from "@/shared/types/command.types"

export const registerFormSchema = z.object({
    firstname: z.string(),
    lastname: z.string(),
    login: z.string().min(1, 'Поле не может быть пустым'),
    password: z.string(),
    repassword: z.string(),
}).superRefine(({repassword, password}, ctx) => {
    if(repassword !== password) {
        ctx.addIssue({
            code: 'custom',
            message: 'Пароли не совпадают',
            path: ['confirmPassword'],
        })
    }
})

export type RegisterFormSchema = z.infer<typeof registerFormSchema>

export const RegisterForm = () => {

    const {register, handleSubmit, formState: {errors}} = useForm<RegisterFormSchema>({
        resolver: zodResolver(registerFormSchema)
    })

    const handleSubmitRegister = async (data: RegisterFormSchema) => {
        const config = await fetchConfig()
        const {firstname, lastname, login, password} = data
        await api(APICOMMAND.ADDUSER, data, config)
    }

    return (
        <form onSubmit={handleSubmit(handleSubmitRegister)} name="registerForm" className="flex flex-col gap-[16px] items-center justify-center border-1 border-sky-300 pt-12 pb-12 pl-10 pr-10 rounded-[20px] shadow-md">
            <h2 className="font-medium text-lg m-0">Регистрация</h2>
            <div className="flex flex-col gap-[10px]">
                <FormInput type={'text'} placeholder="Фамилия" label="Фамилия" {...register('firstname')} errorMessage={errors.firstname?.message}/>
            <FormInput type={'text'} placeholder="Имя" label="Имя" {...register('lastname')} errorMessage={errors.lastname?.message}/>
            <FormInput type={'email'} placeholder="E-mail" label="Email" {...register('login')} errorMessage={errors.login?.message}/>
            <FormInput type={'password'} placeholder="Пароль" label="Пароль" {...register('password')} errorMessage={errors.password?.message}/>
            <FormInput type={'password'} placeholder="Подтвердите пароль" label="Подтвердите пароль" {...register('repassword')} errorMessage={errors.repassword?.message}/>
            </div>
            <Button classname={"font-medium bg-blue-500 pl-5 pr-5 pt-2 pb-2 rounded flex justify-center items-center text-white cursor-pointer"} type="submit">
                    Зарегистрироваться
                </Button>
                <Link href={'/auth'}>
                    <Button classname="cursor-pointer">
                        Войти
                    </Button>
                </Link>
        </form>
    )
}