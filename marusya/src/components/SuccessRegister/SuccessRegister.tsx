import { useModalCloseWithEscape } from "../../hooks/useModalCloseWithEscape"
import { useAppDispatch } from "../../store/hooks/hooks"
import { closeModal, openModal } from "../../store/slices/modalSlice"
import { Button } from "../../ui/Button/Button"
import './SuccessRegister.css'

export const SuccessRegister = () => {

    const dispatch = useAppDispatch()

    useModalCloseWithEscape('success')

    return (
        <div className="background_success">
            <div className="success_modal">
            <button className="close_success" onClick={() => dispatch(closeModal('success'))}></button>
                <picture className="success_form_pic">
                    <img
                        className="success_form_logo"
                        src="./src/assets/img-genre/logo_black_text.png"
                        alt="logo"
                    />
                </picture>
                <h3 className="success_modal_title">Регистрация завершена</h3>
                <p className="success_modal_descr">Используйте Вашу электронную почту для входа</p>
                <Button disabled={false} variant={'primary'} onClick={() => dispatch(openModal('auth'))} width='340'>
                    Войти
                </Button>
            </div>
        </div>
    )
}