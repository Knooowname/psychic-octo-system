import { FC, ReactNode } from "react"
import './Button.css'

export interface ButtonProps {
    children: ReactNode,
    variant?: 'primary' | 'secondary' | 'icon',
    disabled: boolean,
    onClick?: () => void,
    type?: 'submit' | 'reset',
    width?: string,
    isLoading?: boolean
}

export const Button: FC<ButtonProps> = ({children, variant, disabled, onClick, type, width}) => {
    return (
        <button data-variant={variant} disabled={disabled} onClick={onClick} type={type} style={{ width: `${width}` }}>
            {children}
        </button>
    )
}