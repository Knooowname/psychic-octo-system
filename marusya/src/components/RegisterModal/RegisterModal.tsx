import { useAppSelector } from "../../store/hooks/hooks"
import ReactDOM from 'react-dom';
import { RegisterForm } from "../RegisterForm/RegisterForm";

export const RegisterModal = () => {
    const { isOpen } = useAppSelector((state) => state.modal)
    if(!isOpen) {
        return null
    }

    return ReactDOM.createPortal(
        <>
            <RegisterForm/>
        </>,
        document.body
    )
}