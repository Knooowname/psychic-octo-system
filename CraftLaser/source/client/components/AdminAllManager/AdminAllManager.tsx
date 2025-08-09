import React, { FC } from "react";
import './AdminAllManager.css'
import { User } from "../../shared/types/user.types";
import { ManagerCard } from "../ui/ManagerCard/ManagerCard";
import { Button } from "../ui/Button/Button";

interface AdminAllManagerProps {
    users: User[],
    openAddManager: () => void,
    onManagersChange: () => void
}

export const AdminAllManager: FC<AdminAllManagerProps> = ({ users, openAddManager, onManagersChange }) => {

    const managers = users?.filter(user => user?.role_id !== '3')

    return (
        <section>
            <div className="managers_wrapper_title_and_btn">
                <h2 className="admin_section_title title">
                    Менеджеры
                </h2>
                <Button fontSize="16px" fontWeight="400" onClick={() => {
                    openAddManager()
                    onManagersChange?.()
                }}>
                    Добавить менеджера
                </Button>
            </div>
            <div>
                <ul className="managers_list">
                    {managers?.map((item) => (
                        <li key={item.id} className="managers_item">
                            <ManagerCard role={item.role_id} name={item.last_name} surname={item.first_name} tel={item.phone} email={item.email} />
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}