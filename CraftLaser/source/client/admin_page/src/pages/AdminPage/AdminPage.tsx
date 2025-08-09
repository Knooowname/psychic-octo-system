import React, { FC, useEffect } from "react";
import { LeftMenuAdmin } from "../../../../components/LeftMenuAdmin/LeftMenuAdmin";
import { User } from "../../../../shared/types/user.types";
import { Order } from "../../../../shared/types/order.types";
import { AdminAllOrdersList } from "../../../../components/AdminAllOrdersList/AdminAllOrdersList";
import { Status } from "../../../../shared/types/status.types";
import { AdminAllManager } from "../../../../components/AdminAllManager/AdminAllManager";
import { AdminAllFilters } from "../../../../components/AdminAllFilters/AdminAllFilters";
import { Material } from "../../../../shared/types/material.types";
import { Filter } from "../../../../shared/types/filter.types";

interface AdminPageProps {
    user: User | null,
    userSess: string,
    openAddManagerModal?: () => void,
    openAddNewProductModal?: () => void,
    openAddNewFilterModal?: () => void,
    openAddNewMaterialModal?: () => void,
    orders: Order[],
    status: Status[],
    users: User[],
    materials: Material[],
    filters: Filter[],
    onManagersChange: () => void,
}

export const AdminPage: FC<AdminPageProps> = ({ onManagersChange, filters, materials, users, user, userSess, openAddManagerModal, openAddNewProductModal, openAddNewFilterModal, openAddNewMaterialModal, orders, status }) => {

    useEffect(() => {

        if (user?.role_id === "3") {
            window.location.replace('/');
        }

    }, [user])

    return (
        <>
            <LeftMenuAdmin openAddManagerModal={openAddManagerModal} openAddNewProductModal={openAddNewProductModal} openAddNewFilterModal={openAddNewFilterModal} openAddNewMaterialModal={openAddNewMaterialModal} />
            <AdminAllManager onManagersChange={onManagersChange} openAddManager={openAddManagerModal} users={users} />
            <AdminAllOrdersList users={users} status={status} orders={orders} />
            <AdminAllFilters openAddFilter={openAddNewFilterModal} openAddMaterial={openAddNewMaterialModal} filters={filters} materials={materials} />
        </>
    )
}