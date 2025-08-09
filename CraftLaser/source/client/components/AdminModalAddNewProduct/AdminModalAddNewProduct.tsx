import React, { ChangeEvent, FC, useEffect, useState } from "react";
import './AdminModalAddNewProduct.css'
import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "../../api/api";
import { APICOMMAND } from "../../shared/types/command.types";
import config from '../../../config/config.json'
import { Button } from "../ui/Button/Button";
import { Material } from "../../shared/types/material.types";
import { Filter } from "../../shared/types/filter.types";
import { CustomCheckboxInput } from "../ui/CustomCheckboxInput/CustomCheckboxInput";

export const adminModalAddNewProductSchema = z.object({
    name_product: z.string(),
    description: z.string(),
    characteristic: z.string(),
    img: z.array(z.string()),
    material_id: z.array(z.string()),
    filter_ids: z.array(z.string()),
    document: z.string(),
    price: z.string(),
    group_id: z.number(),
    deleted: z.boolean(),
})

export type AdminModalAddNewProductType = z.infer<typeof adminModalAddNewProductSchema>

interface AdminModalAddNewProductProps {
    visibleFlag: boolean,
    closeModal?: () => void,
    userSess?: string,
    materials?: Material[] | null,
    filters?: Filter[] | null,
}

export const AdminModalAddNewProduct: FC<AdminModalAddNewProductProps> = ({ visibleFlag, closeModal, userSess, materials, filters }) => {

    const [selectedMaterials, setSelectedMaterials] = useState<string[]>([])
    const [selectedFilters, setSelectedFilters] = useState<string[]>([])

    const { register, handleSubmit, formState: { errors }, setValue, watch } = useForm<AdminModalAddNewProductType>({
        resolver: zodResolver(adminModalAddNewProductSchema),
        defaultValues: {
            deleted: false,
            group_id: 0,
        }
    })

    const onModalAddNewProductSubmit = async (data: AdminModalAddNewProductType) => {
        const response = await api(APICOMMAND.addNewProduct, data, String(userSess), config)
        const responseData = await response.json()
        if (responseData.error === null) {
            closeModal?.()
        } else {
            console.error('Ошибка')
        }
    }

    const handleMaterialChange = (materialId: string) => {
        setSelectedMaterials(prev =>
            prev.includes(materialId)
                ? prev.filter(name => name !== materialId)
                : [...prev, materialId]
        )
    }

    const handleFilterChange = (filterId: string) => {
        setSelectedFilters(prev =>
            prev.includes(filterId) ? prev.filter(x => x !== filterId) : [...prev, filterId]
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
        setValue('filter_ids', selectedFilters);
        setValue('material_id', selectedMaterials);
    }, [selectedMaterials, selectedFilters, setValue]);

    const fileToBase64 = (file: File): Promise<string> => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader()

            reader.readAsDataURL(file)
            reader.onload = () => resolve(reader.result as string)
            reader.onerror = error => reject(error)
        })
    }

    const handleFileChange = async (
        e: React.ChangeEvent<HTMLInputElement>,
        targetField: 'img' | 'document'
    ) => {
        const files = e.target.files;
        if (!files) return;

        const base64Files = await Promise.all(
            Array.from(files).map(file => fileToBase64(file))
        );

        if (targetField === 'img') {
            setValue('img', base64Files);
        } else if (targetField === 'document') {
            setValue('document', base64Files[0] || '');
        }
    };

    const watchImg = watch('img')
    const watchDocs = watch('document')

    return (
        <>
            {visibleFlag && <div className="wrapper_modal_form_add_product" onClick={() => closeModal()}>
                <div className="wrapper_relative_add_product" onClick={(e) => e.stopPropagation()}>
                    {/* <button className="close_modal_form_btn" onClick={() => closeModal()}></button> */}
                    <form className="modal_form_add_product" onSubmit={handleSubmit(onModalAddNewProductSubmit)}>
                        <label htmlFor="uploadImgFile" className="input_add_file_img_add_product">
                            <span className="upload_img_file_span_add_product">
                                Загрузить фото товара
                            </span>
                        </label>
                        <input id="uploadImgFile" style={{ display: 'none' }} type="file" accept="image/*" multiple onChange={(e) => handleFileChange(e, 'img')} />
                        {watchImg && watchImg.length > 0 && (
                            <div className="preview_images_container">
                                {watchImg.map((img, index) => (
                                    <div key={img} className="preview_image_wrapper">
                                        <img src={img} className="preview_image" />
                                        <button
                                            type="button"
                                            className="remove_image_btn"
                                            onClick={() => {
                                                const newImages = watchImg.filter((_, i) => i !== index)
                                                setValue('img', newImages)
                                            }}
                                        >
                                            ✖
                                        </button>
                                    </div>
                                ))}
                            </div>
                        )}
                        <label className="input_label_add_product">
                            <span className="label_span_add_product">
                                Введите название товара
                            </span>
                            <input className="modal_form_input_add_product" type="text" placeholder="Название товара:" {...register('name_product')} />
                            {errors?.name_product?.message &&
                                <span className="error_modal_feedback_form_add_product">{errors.name_product.message}</span>
                            }
                        </label>
                        <label className="input_label_add_product">
                            <span className="label_span_add_product">
                                Введите описание товара
                            </span>
                            <textarea className="modal_form_input_add_product modal_form_area_add_product" placeholder="Описание товара:" {...register('description')} />
                            {errors?.description?.message &&
                                <span className="error_modal_feedback_form_add_product">{errors.description.message}</span>
                            }
                        </label>
                        <label className="input_label_add_product">
                            <span className="label_span_add_product">
                                Введите характеристики товара
                            </span>
                            <textarea className="modal_form_input_add_product modal_form_area_add_product" placeholder="Характеристики товара:" {...register('characteristic')} />
                            {errors?.characteristic?.message &&
                                <span className="error_modal_feedback_form_add_product">{errors.characteristic.message}</span>
                            }
                        </label>
                        {filters && <label className="input_label_add_product">
                            <span className="label_span_add_product">Группы фильтров</span>
                            {filters?.map(item => (
                                <div key={item.id}>
                                    <CustomCheckboxInput text={item.name_filters} onChange={() => handleFilterChange(item.id)} />
                                </div>
                            ))}
                        </label>}
                        {materials && <label className="input_label_add_product">
                            <span className="label_span_add_product">Фильтры</span>
                            {materials?.map(item => (
                                <div key={item.id}>
                                    <CustomCheckboxInput text={item.name_material} onChange={() => handleMaterialChange(item.id)} />
                                </div>
                            ))}
                        </label>}
                        <label htmlFor="uploadDocumentFile" className="input_add_file_img_add_product">
                            <span className="upload_img_file_span_add_product">
                                Загрузить файл .dxf
                            </span>
                        </label>
                        <input id="uploadDocumentFile" style={{ display: 'none' }} type="file" accept=".dxf" onChange={(e) => handleFileChange(e, 'document')} />
                        {watchDocs && (
                            <div className="preview_document_wrapper">
                                <span className="document_icon">📄</span>
                                <span className="document_name">Файл загружен</span>
                                <button
                                    type="button"
                                    className="remove_document_btn"
                                    onClick={() => setValue('document', '')}
                                >
                                    ✖
                                </button>
                            </div>
                        )}
                        <label className="input_label_add_product">
                            <span className="label_span_add_product">
                                Введите стоимость товара
                            </span>
                            <input className="modal_form_input_add_product" type="text" placeholder="Стоимость товара:" {...register('price')} />
                            {errors?.price?.message &&
                                <span className="error_modal_feedback_form_add_product">{errors.price.message}</span>
                            }
                        </label>
                        <Button type="submit" fontSize="16px">
                            Добавить товар
                        </Button>
                    </form>
                </div>
            </div>}
        </>
    )
}