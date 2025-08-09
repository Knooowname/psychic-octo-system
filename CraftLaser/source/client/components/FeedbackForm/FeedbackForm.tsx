import React, { FC, useEffect } from "react";
import './FeedbackForm.css'
import { SectionTitle } from "../ui/SectionTitle/SectionTitle";
import { Button } from "../ui/Button/Button";
import z from "zod";
import { User } from "../../shared/types/user.types"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "../../api/api";
import { APICOMMAND } from "../../shared/types/command.types";
import config from '../../../config/config.json'
import { InputField } from "../../shared/types/inputField.types";

interface FeedbackFormProps {
    formTitle?: string,
    formDescr?: string,
    fields: InputField[],
    fieldsToValidate?: any, // список обязательных для валидации
    fieldsToSend?: any,      // список тех, что реально отправляем
    userSess?: string,
    user?: User | null,
    formType?: 'review' | 'mail',
}

const createDinamicSchema = (fields: InputField[], requiredOnlyFields: string[]) => {
    const shape: Record<string, z.ZodTypeAny> = {}

    fields.forEach((field) => {
        let validator: z.ZodTypeAny;

        switch (field.type) {
            case 'text':
                validator = z.string()
                break;

            case 'email':
                validator = z.email('Некорректный email')
                break;

            case 'tel':
                validator = z
                    .string()
                    .min(10, "Слишком короткий номер")
                    .max(20, "Слишком длинный номер")
                    .regex(/^(\+7|8)?[\s-]?\(?\d{3}\)?[\s-]?\d{3}[\s-]?\d{2}[\s-]?\d{2}$/, "Некорректный номер");
                break;

            default:
                validator = z.string();
        }

        if (requiredOnlyFields.includes(field.name)) {
            validator = (validator as z.ZodString).min(1, "Поле не может быть пустым");
        } else {
            validator = validator.optional()
        }

        shape[field.name] = validator
    });

    return z.object(shape)
}

function filterFields(data: Record<string, any>, allowedFields: string[]) {
    return allowedFields.reduce((acc, key) => {
        if (data[key] !== undefined) {
            acc[key] = data[key]
        }
        return acc
    }, {} as Record<string, any>)
}

export const FeedbackForm: FC<FeedbackFormProps> = ({ formTitle, formDescr, fields, fieldsToValidate, fieldsToSend, userSess, user, formType }) => {

    const schema = createDinamicSchema(fields, fieldsToValidate)

    const { register, handleSubmit, formState: { errors }, reset } = useForm<z.infer<typeof schema>>({
        resolver: zodResolver(schema),
        defaultValues: {
            user_id: Number(user?.id)
        }
    })

    const onSubmitMailReq = async (data: any) => {
        const payload = fieldsToSend ? filterFields(data, fieldsToSend) : data;
        const preparedData = {
            ...payload
        }
        const response = await api(APICOMMAND.sendToMailRequest, preparedData, userSess, config);
        const result = await response.json();
    };

    const onSubmitReview = async (data: any) => {
        const payload = fieldsToSend ? filterFields(data, fieldsToSend) : data
        const preparedPayload = {
            ...payload,
            user_id: Number(user.id)
        }
        const response = await api(APICOMMAND.addNewReviews, preparedPayload, userSess, config);
        const respData = await response.json()
    }

    useEffect(() => {
        if(user) {
            reset({
                user_id: Number(user.id)
            })
        }
    }, [user])

    return (
        <section className="feedback_section">
            <SectionTitle title={formTitle ? formTitle : "Оставьте заявку"} text="Feedback Form" marginB="24px" />
            <p className="feedback_descr">
                {formDescr ? formDescr === '.' ? null : formDescr : 'И мы свяжемся с Вами в течение рабочего дня'}
            </p>
            <form className="feedback_form" onSubmit={handleSubmit(formType === 'review' ? onSubmitReview : onSubmitMailReq)}>
                {fields.map((field) => (
                    <div className="feedback_wrapper_error_message" key={field.name}>
                        <input className="feedback_form_input" type={field.type} placeholder={field.placeholder} {...register(field.name)} />
                        {errors?.[field.name]?.message && (
                            <span className="error_message_feedback_form">{String(errors[field.name]?.message)}</span>
                        )}
                    </div>
                ))}
                <Button type="submit" width="360px" height="60px">
                    Отправить
                </Button>
            </form>
        </section>
    )
}