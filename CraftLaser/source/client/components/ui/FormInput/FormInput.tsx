import React, { FC } from "react";
import './FormInput.css'

interface FormInputProps {
    type: string,
    placeholder: string,
    width?: string,
    height?: string,
    onChange?: (e: any) => void,
    errorMessage?: string,
}

export const FormInput: FC<FormInputProps> = ({ type, placeholder, width, height, onChange, errorMessage }) => {
    return (
        <>
            <input className="form_input" type={type} placeholder={placeholder} style={{ width: `${width}`, height: `${height}` }} onChange={onChange}/>
            {errorMessage && <span>{errorMessage}</span>}
        </>
    )
}