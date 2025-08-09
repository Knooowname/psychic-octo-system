import React, { FC } from "react";
import './CustomCheckboxInput.css'

interface CustomCheckboxInputProps {
    text: string,
    onChange?: () => void
}

export const CustomCheckboxInput: FC<CustomCheckboxInputProps> = ({ text, onChange }) => {
    return (
        <label className="custom_checkbox_label">
            <input type="checkbox" className="custom_checkbox_input" onChange={onChange}/>
            <span className="custom_checkbox_box"></span>
            {text}
        </label>
    )
}