import React, { FC, useEffect, useState } from "react";
import './AdminModalAddNewMaterial.css'
import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "../../api/api";
import { APICOMMAND } from "../../shared/types/command.types";
import config from '../../../config/config.json'
import { Button } from "../ui/Button/Button";
import { Filter } from "../../shared/types/filter.types";
import { CustomCheckboxInput } from "../ui/CustomCheckboxInput/CustomCheckboxInput";

interface AdminModalAddNewMaterialProps {
    visibleFlag: boolean,
    closeModal: () => void,
    userSess: string,
    filters: Filter[]
}

export const adminModalAddNewMaterialSchema = z.object({
    name_material: z.string(),
    id_filter: z.array(z.string())
})

export type AdminModalAddNewMaterialType = z.infer<typeof adminModalAddNewMaterialSchema>

export const AdminModalAddNewMaterial: FC<AdminModalAddNewMaterialProps> = ({ visibleFlag, closeModal, userSess, filters }) => {

    const [selectedMaterials, setSelectedMaterials] = useState<string[]>([])

    const { register, handleSubmit, formState: { errors }, setValue } = useForm<AdminModalAddNewMaterialType>({
        resolver: zodResolver(adminModalAddNewMaterialSchema)
    })

    const onSubmitAddNewMaterial = async (data: AdminModalAddNewMaterialType) => {
        const responseMat = await api(APICOMMAND.addNewMaterial, data, String(userSess), config)
        const respData = await responseMat.json()
        if(respData.error === null) {
            closeModal?.()
        }
    }

    const handleMaterialChange = (filterId: string) => {
        setSelectedMaterials(prev =>
            prev.includes(filterId)
                ? prev.filter(name => name !== filterId)
                : [...prev, filterId]
        )
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

    useEffect(() => {
        setValue('id_filter', selectedMaterials)
    }, [selectedMaterials, setValue])

    return (
        <>
            {visibleFlag && <div className="wrapper_modal_form" onClick={() => closeModal()}>
                <div className="wrapper_relative" onClick={(e) => e.stopPropagation()}>
                    <button className="close_modal_form_btn" onClick={() => closeModal()}></button>
                    <h3 className="modal_form_title">
                        Введите название подфильтра и выберите к какому фильтру относится
                    </h3>
                    <form className="modal_form" onSubmit={handleSubmit(onSubmitAddNewMaterial)}>
                        <div className="wrapper_checkbox">
                            <span className="label_span_add_product">К какому фильтру относится</span>
                            {filters.map((item) => (
                                <div key={item.id}>
                                    <CustomCheckboxInput text={item.name_filters} onChange={() => handleMaterialChange(item.id)} />
                                </div>
                            ))}
                        </div>
                        <input className="modal_form_input" type="text" placeholder="Название фильтра:" {...register('name_material')} />
                        {errors?.name_material?.message &&
                            <span className="error_modal_feedback_form">{errors.name_material.message}</span>
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