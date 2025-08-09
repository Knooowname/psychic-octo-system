import React, { FC, useState } from "react";
import './LeftMenuAdmin.css'
import { LeftMenuAdminBtn } from "../ui/LeftMenuAdminBtn/LeftMenuAdminBtn";

interface LeftMenuAdminProps {
    openAddManagerModal?: () => void,
    openAddNewProductModal?: () => void,
    openAddNewFilterModal?: () => void,
    openAddNewMaterialModal?: () => void,
}

export const LeftMenuAdmin: FC<LeftMenuAdminProps> = ({ openAddManagerModal, openAddNewProductModal, openAddNewFilterModal, openAddNewMaterialModal }) => {
    
    const [menuFlag, setMenuFlag] = useState<boolean>(false)

    const handleClickMenu = () => {
        setMenuFlag(prev => prev = !prev)
    }

    return (
        <>
            <button className="left_menu_admin_burger" onClick={handleClickMenu}>
                <div className={`left_menu_wrapper_btns ${menuFlag ? 'left_menu_wrapper_btns-active' : ''}`} onClick={(e) => e.stopPropagation()}>
                    <LeftMenuAdminBtn onClick={() => {
                        openAddManagerModal()
                        handleClickMenu()
                    }}>
                        Добавить менеджера
                    </LeftMenuAdminBtn>
                    <LeftMenuAdminBtn onClick={() => {
                        openAddNewProductModal()
                        handleClickMenu()
                    }}>
                        Добавить изделие
                    </LeftMenuAdminBtn>
                    <LeftMenuAdminBtn onClick={() => {
                        openAddNewFilterModal()
                        handleClickMenu()
                    }}>
                        Добавить фильтр
                    </LeftMenuAdminBtn>
                    <LeftMenuAdminBtn onClick={() => {
                        openAddNewMaterialModal()
                        handleClickMenu()
                    }}>
                        Добавить подфильтр
                    </LeftMenuAdminBtn>
                </div>
            </button>
        </>
    )
}