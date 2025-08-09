import { useAppSelector } from "../../store/hooks/hooks"
import ReactDOM from 'react-dom';
import { LoginForm } from "../LoginForm/LoginForm";

export const AuthModal = () => {
    const { isOpen } = useAppSelector(state => state.modal)
    if(!isOpen) {
        return null
    }

    return ReactDOM.createPortal(
            <>
                <LoginForm/>
            </>,
            document.body
        )
}