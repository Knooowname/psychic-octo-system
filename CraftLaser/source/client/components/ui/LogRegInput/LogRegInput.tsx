import React from "react";
import './LogRegInput.css'

interface LogRegInputProps {
    type: string;
    placeholder?: string;
    label?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    value?: string;
    errorMessage?: string;
    accept?: string;
    defaultValue?: string;
    width?: string,
    height?: string,
    isDisabled?: boolean
}

export const LogRegInput = React.forwardRef<HTMLInputElement, LogRegInputProps>((props, ref) => {
    
    const {isDisabled, label, errorMessage, defaultValue, width, height, ...otherProps} = props
    
    return (
        <label className="logreginput_label">
            <span className="logreginput_span">{label}</span>
            <input className="logreginput_inp" style={{width: `${width}px`, height: `${height}`}} defaultValue={defaultValue} {...otherProps} ref={ref} />
            {errorMessage && <span className="logreginput_err">{errorMessage}</span>}
        </label>
    )
})