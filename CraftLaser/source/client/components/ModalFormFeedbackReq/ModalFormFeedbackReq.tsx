import React, { FC, useEffect } from "react";
import './ModalFormFeedbackReq.css'
import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../ui/Button/Button";
import { api } from "../../api/api";
import { APICOMMAND } from "../../shared/types/command.types";
import config from '../../../config/config.json'

interface ModalFormFeedbackReqProps {
  visibleFlag?: boolean,
  userSess?: string,
  closeModal?: () => void,
}

export const modalFeedbackFormSchema = z.object({
  lastname: z.string().min(1, 'Поле не может быть пустым'),
  phone: z
    .string()
    .min(10, "Слишком короткий номер")
    .max(20, "Слишком длинный номер")
    .regex(
      /^(\+7|8)?[\s-]?\(?\d{3}\)?[\s-]?\d{3}[\s-]?\d{2}[\s-]?\d{2}$/,
      "Некорректный номер телефона"
    ),
  email: z.email().min(1, 'Поле не может быть пустым'),
})

export type ModalFeedbackFormType = z.infer<typeof modalFeedbackFormSchema>

export const ModalFormFeedbackReq: FC<ModalFormFeedbackReqProps> = ({ closeModal, visibleFlag, userSess }) => {

  const { register, handleSubmit, formState: { errors } } = useForm<ModalFeedbackFormType>({
    resolver: zodResolver(modalFeedbackFormSchema)
  })

  const onModalSubmit = async (data: ModalFeedbackFormType) => {
    const responseModal = await api(APICOMMAND.sendToMailRequest, data, userSess, config)
    const dataModal = await responseModal.json()
  }

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if(event.key === 'Escape' && visibleFlag) {
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
            Оставьте заявку
          </h3>
          <p className="modal_form_descr">
            И мы свяжемся с Вами в течение рабочего дня
          </p>
          <form className="modal_form" onSubmit={handleSubmit(onModalSubmit)}>
            <input className="modal_form_input" type="text" placeholder="Ваше имя:" {...register('lastname')} />
            {errors?.lastname?.message &&
              <span className="error_modal_feedback_form">{errors.lastname.message}</span>
            }
            <input className="modal_form_input" type="tel" placeholder="Ваш телефон:" {...register('phone')} />
            {errors?.phone?.message &&
              <span className="error_modal_feedback_form">{errors.phone.message}</span>
            }
            <input className="modal_form_input" type="email" placeholder="Ваш E-mail:" {...register('email')} />
            {errors?.email?.message &&
              <span className="error_modal_feedback_form">{errors.email.message}</span>
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