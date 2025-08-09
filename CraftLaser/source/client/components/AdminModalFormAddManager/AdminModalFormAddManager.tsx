import React, { FC, useEffect } from "react";
import './AdminModalFormAddManager.css'
import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "../../api/api";
import { APICOMMAND } from "../../shared/types/command.types";
import config from '../../../config/config.json'
import { Button } from "../ui/Button/Button";

export const ModalFormAddManagerSchema = z.object({
    lastname: z.string().min(1, 'Поле не может быть пустым'),
    firstname: z.string().min(1, 'Поле не может быть пустым'),
    email: z.email().min(1, 'Поле не может быть пустым'),
    password: z.string().min(1, 'Поле не может быть пустым'),
    phone: z
        .string()
        .min(10, "Слишком короткий номер")
        .max(20, "Слишком длинный номер")
        .regex(
            /^(\+7|8)?[\s-]?\(?\d{3}\)?[\s-]?\d{3}[\s-]?\d{2}[\s-]?\d{2}$/,
            "Некорректный номер телефона"
        ),
    address: z.string().min(1, 'Поле не может быть пустым'),
    role_id: z.string(),
})

export type ModalFormAddManagerType = z.infer<typeof ModalFormAddManagerSchema>

interface ModalFormAddManagerProps {
    visibleFlag?: boolean,
    closeModal?: () => void,
}

export const AdminModalFormAddManager: FC<ModalFormAddManagerProps> = ({ visibleFlag, closeModal }) => {

    const { register, handleSubmit, formState: { errors } } = useForm<ModalFormAddManagerType>({
        resolver: zodResolver(ModalFormAddManagerSchema),
        defaultValues: {
            address: 'г.Курган, ул.К.Мяготина, стр.106',
            role_id: '2',
        }
    })

    const onModalAddManagerSubmit = async (data: ModalFormAddManagerType) => {
        const response = await api(APICOMMAND.register, data, '', config)
        const responseData = await response.json()
        if(responseData.error === null) {
            closeModal?.()
        }
    }

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape' && visibleFlag) {
                closeModal?.()
            }
        }

        document.addEventListener('keydown', handleKeyDown)
        return () => {
            document.removeEventListener('keydown', handleKeyDown)
        }
    }, [visibleFlag, closeModal])

    return (
        <>
            {visibleFlag && <div className="wrapper_modal_form" onClick={() => closeModal()}>
                <div className="wrapper_relative" onClick={(e) => e.stopPropagation()}>
                    <button className="close_modal_form_btn" onClick={() => closeModal()}></button>
                    <h3 className="modal_form_title">
                        Введите данные сотрудника
                    </h3>
                    <form className="modal_form" onSubmit={handleSubmit(onModalAddManagerSubmit)}>
                        <input className="modal_form_input" type="text" placeholder="Имя:" {...register('lastname')} />
                        {errors?.lastname?.message &&
                            <span className="error_modal_feedback_form">{errors.lastname.message}</span>
                        }
                        <input className="modal_form_input" type="text" placeholder="Фамилия:" {...register('firstname')} />
                        {errors?.firstname?.message &&
                            <span className="error_modal_feedback_form">{errors.firstname.message}</span>
                        }
                        <input className="modal_form_input" type="email" placeholder="Email:" {...register('email')} />
                        {errors?.email?.message &&
                            <span className="error_modal_feedback_form">{errors.email.message}</span>
                        }
                        <input className="modal_form_input" type="password" placeholder="Пароль:" {...register('password')} />
                        {errors?.password?.message &&
                            <span className="error_modal_feedback_form">{errors.password.message}</span>
                        }
                        <input className="modal_form_input" type="tel" placeholder="Телефон:" {...register('phone')} />
                        {errors?.phone?.message &&
                            <span className="error_modal_feedback_form">{errors.phone.message}</span>
                        }
                        <Button type="submit">
                            Отправить
                        </Button>
                    </form>
                </div>
            </div>}
        </>
    )
}