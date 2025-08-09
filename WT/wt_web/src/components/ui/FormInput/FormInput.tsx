'use client'

import React from "react"

interface FormInputProps {
    type: string;
    placeholder?: string;
    label?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    value?: string;
    errorMessage?: string;
    accept?: string
}

export const FormInput = React.forwardRef<HTMLInputElement, FormInputProps>((props, ref) => {
    
    const {label, errorMessage, ...otherProps} = props
    
    return (
        <label className="flex flex-col gap-[2px] font-normal cursor-pointer">
            <span className="font-light text-gray-400 text-sm">{label}</span>
            <input className="text-black-400 p-0.5 w-70 h-10 border-1 border-blue-300 rounded pl-2 cursor-pointer" {...otherProps} ref={ref} />
            {errorMessage && <span className="text-red-500 text-sm">{errorMessage}</span>}
        </label>
    )
})

