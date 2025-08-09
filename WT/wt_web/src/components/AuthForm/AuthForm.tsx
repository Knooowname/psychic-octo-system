'use client'

import { z } from "zod"
import { Button } from "../ui/Button/Button"
import { FormInput } from "../ui/FormInput/FormInput"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link"
import { api } from "@/pages/api/api"
import { fetchConfig } from "@/api/fetchConfig"
import { useRouter } from "next/navigation"
import { setUser } from "@/redux/reducers/userSlice"
import { APICOMMAND } from "@/shared/types/command.types"
import { fetchTasksExecutor } from "@/redux/reducers/taskSlice"
import { useAppSelector } from "@/hooks/useAppSelector"
import { useAppDispatch } from "@/hooks/useAppDispatch"
import { useEffect } from "react"
import { useAuth } from "@/hooks/useAuth"

const authFormSchema = z.object({
    login: z.string().min(1, 'Поле не может быть пустым'),
    password: z.string().min(1, 'Поле не может быть пустым'),
})

type AuthFormType = z.infer<typeof authFormSchema>

export const AuthForm = () => {

    const router = useRouter()
    const dispatch = useAppDispatch()
    const tasks = useAppSelector(state => state.task.tasks)
    const {user, login} = useAuth()

    const { register, handleSubmit, formState: { errors } } = useForm<AuthFormType>({
        resolver: zodResolver(authFormSchema)
    })

    const handleClickAuth = async (data: AuthFormType) => {
        try {
            const config = await fetchConfig()
            const response: Response | undefined = await api(APICOMMAND.AUTHUSER, data, config)

            if (!response || !response.ok) {
                throw new Error('Ошибка авторизации');
            }

            const dataUser = await response?.json()
            login(dataUser.data[0])
            console.log(localStorage.getItem('user'))
            dispatch(setUser(dataUser.data[0]))
            dispatch(fetchTasksExecutor(dataUser.data[0].id))
            router.push('/')
        } catch (error) {
            console.error(error)
        }
    }
    
    useEffect(() => {
        if(user) {
            router.push('/')
        }
    }, [user])    

    return (
        <>
            <form onSubmit={handleSubmit(handleClickAuth)} name="authForm" className="flex flex-col gap-[16px] items-center justify-center border-1 border-sky-300 pt-12 pb-12 pl-10 pr-10 rounded-[20px] shadow-md">
                <h2 className="font-medium text-lg m-0">Авторизация</h2>
                <div className="flex flex-col gap-[10px]">
                    <FormInput placeholder="E-mail" type="text" label="E-mail" {...register('login')} errorMessage={errors.login?.message} />
                    <FormInput placeholder="Пароль" type="password" label="Пароль" {...register('password')} errorMessage={errors.password?.message} />
                </div>
                <Button classname={"font-medium bg-blue-500 pl-7 pr-7 pt-2 pb-2 rounded flex justify-center items-center text-white cursor-pointer"} type="submit">
                    Отправить
                </Button>
                <Link href={'/register'}>
                    <Button classname="cursor-pointer">
                        Регистрация
                    </Button>
                </Link>
            </form>
        </>
    )
}