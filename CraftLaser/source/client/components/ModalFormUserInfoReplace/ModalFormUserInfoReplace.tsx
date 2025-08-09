import React, { FC, useEffect, useState } from "react";
import './ModalFormUserInfoReplace.css'
import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "../../api/api";
import { User } from "../../shared/types/user.types";
import { APICOMMAND } from "../../shared/types/command.types";
import config from '../../../config/config.json'
import { Button } from "../ui/Button/Button";
import Cookies from "js-cookie";

export const ModalFormUserInfoReplaceSchema = z.object({
    lastname: z.string().min(1, 'Поле не может быть пустым'),
    firstname: z.string().min(1, 'Поле не может быть пустым'),
    phone: z
        .string()
        .min(10, "Слишком короткий номер")
        .max(20, "Слишком длинный номер")
        .regex(
            /^(\+7|8)?[\s-]?\(?\d{3}\)?[\s-]?\d{3}[\s-]?\d{2}[\s-]?\d{2}$/,
            "Некорректный номер телефона"
        ),
    address: z.string().min(1, 'Поле не может быть пустым'),
    email: z.email().min(1, 'Поле не может быть пустым'),
})

export type ModalFormUserInfoReplaceType = z.infer<typeof ModalFormUserInfoReplaceSchema>

interface ModalFormUserInfoReplaceProps {
    visibleFlag?: boolean,
    userSess?: string,
    closeModal?: () => void,
    user: User | null,
    onUserDataChanged?: () => void
}

export const ModalFormUserInfoReplace: FC<ModalFormUserInfoReplaceProps> = ({ visibleFlag, user, closeModal, onUserDataChanged }) => {

    const userSess = Cookies.get('user_sess')

    const { register, handleSubmit, formState: { errors }, reset } = useForm<ModalFormUserInfoReplaceType>({
        resolver: zodResolver(ModalFormUserInfoReplaceSchema),
        defaultValues: {
            lastname: '',
            firstname: '',
            phone: '',
            address: '',
            email: '',
        }
    })

    useEffect(() => {
        if (user) {
            reset({
                lastname: '',
                firstname: '',
                phone: '',
                address: '',
                email: user.email,
            })
        }
    }, [user])

    const onModalUserInfoRepSubmit = async (data: ModalFormUserInfoReplaceType) => {
        const response = await api(APICOMMAND.changeUserData, data, String(userSess), config)
        const responseData = await response.json()
        onUserDataChanged?.()
        closeModal?.()
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
                        Введите новые данные
                    </h3>
                    <form className="modal_form" onSubmit={handleSubmit(onModalUserInfoRepSubmit)}>
                        <input className="modal_form_input" type="text" placeholder="Ваше имя:" {...register('lastname')} />
                        {errors?.lastname?.message &&
                            <span className="error_modal_feedback_form">{errors.lastname.message}</span>
                        }
                        <input className="modal_form_input" type="text" placeholder="Ваша фамилия:" {...register('firstname')} />
                        {errors?.firstname?.message &&
                            <span className="error_modal_feedback_form">{errors.firstname.message}</span>
                        }
                        <input className="modal_form_input" type="tel" placeholder="Ваш телефон:" {...register('phone')} />
                        {errors?.phone?.message &&
                            <span className="error_modal_feedback_form">{errors.phone.message}</span>
                        }
                        <input className="modal_form_input" type="text" placeholder="Ваш адрес:" {...register('address')} />
                        {errors?.address?.message &&
                            <span className="error_modal_feedback_form">{errors.address.message}</span>
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