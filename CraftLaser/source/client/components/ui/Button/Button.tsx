import React, { FC } from "react"
import './Button.css'


interface ButtonProps {
    children: React.ReactNode,
    type?: 'button' | 'submit',
    onClick?: () => void,
    width?: string,
    height?: string,
    fontSize?: string,
    fontWeight?: string,
    padding?: string,
    href?: string,
}

export const Button: FC<ButtonProps> = ({ children, href, type, onClick, width, height, fontSize, fontWeight, padding }) => {
    return (
        <button className="custom_button" type={type} onClick={onClick} style={{ width: `${width}`, height: `${height}`, fontSize: `${fontSize}`, fontWeight: `${fontWeight}`, padding: `${padding}`}}>
            {href ? <a href={href} className="button_href">{children}</a> : children}
        </button>
    )
}