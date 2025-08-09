import { FC } from 'react'
import './FormInput.css'

export interface FormInputProps {
    type: string,
    placeholder: string,
    backgroundImg: string,
    width?: string,
    onChange?: (e: any) => void,
    errorMessage?: string,
}

export const FormInput: FC<FormInputProps> = ({type, placeholder, backgroundImg, width, onChange, errorMessage, ...rest}) => {
    return (
        <label className='wrapper_from_input'>
            <input className='login_and_reg_form_input' onChange={onChange} type={type} placeholder={placeholder} style={{ width: `${width}px`, backgroundImage: `url(${backgroundImg})`}} {...rest}/>
            {errorMessage && (
                <span className='error_span'>{errorMessage}</span>
            )}
        </label>
    )
}
