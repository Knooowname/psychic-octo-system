import React, { FC } from "react";
import './LeftMenuAdminBtn.css'

interface LeftMenuAdminBtnProps {
    children: React.ReactNode,
    onClick?: () => void,
}

export const LeftMenuAdminBtn: FC<LeftMenuAdminBtnProps> = ({ onClick, children }) => {
    return (
        <button className="left_menu_admin_btn" onClick={onClick}>
            {children}
        </button>
    )
}