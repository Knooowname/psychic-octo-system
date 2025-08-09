
interface ButtonProps {
    children: React.ReactNode,
    type?: 'submit' | 'reset' | 'button',
    classname?: string,
    onClick?: () => void,
    disabled?: boolean,
}

export const Button = ({children, type, classname, onClick, disabled}: ButtonProps) => {
    return (
        <button disabled={disabled} className={classname} type={type} onClick={onClick} >
            {children}
        </button>
    )
}