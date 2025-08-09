import React, { FC, useEffect } from "react";
import './AdminModalAddNewFilter.css'
import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "../../api/api";
import { APICOMMAND } from "../../shared/types/command.types";
import config from '../../../config/config.json'
import { Button } from "../ui/Button/Button";

interface AdminModalAddNewFilterProps {
    visibleFlag?: boolean,
    closeModal?: () => void,
    userSess: string
}

export const adminModalAddNewFilterSchema = z.object({
    name_filter: z.string()
})

export type AdminModalAddNewFilterType = z.infer<typeof adminModalAddNewFilterSchema>

export const AdminModalAddNewFilter: FC<AdminModalAddNewFilterProps> = ({ visibleFlag, closeModal, userSess }) => {
    
    const {register, handleSubmit, formState: { errors }} = useForm<AdminModalAddNewFilterType>({
        resolver: zodResolver(adminModalAddNewFilterSchema)
    })

    const handleSubmitAddNewFilter = async (data: AdminModalAddNewFilterType) => {
        const response = await api(APICOMMAND.addNewFilter, data, userSess, config)
        const respData = await response.json()
        if(respData.error === null) {
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
                        Введите название фильтра
                    </h3>
                    <form className="modal_form" onSubmit={handleSubmit(handleSubmitAddNewFilter)}>
                        <input className="modal_form_input" type="text" placeholder="Название фильтра:" {...register('name_filter')} />
                        {errors?.name_filter?.message &&
                            <span className="error_modal_feedback_form">{errors.name_filter.message}</span>
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