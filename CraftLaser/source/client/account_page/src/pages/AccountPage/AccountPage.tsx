import React, { FC } from "react";
import './AccountPage.css'
import { AccountAllBlock } from "../../../../components/AccountAllBlock/AccountAllBlock";
import { User } from "../../../../shared/types/user.types";
import { Order } from "../../../../shared/types/order.types";

interface AccountPageProps {
    openModal?: () => void,
    userSess: string,
    user: User | null,
    orders: Order[]
}

export const AccountPage: FC<AccountPageProps> = ({ openModal, user, userSess, orders }) => {
    return (
        <>
            <AccountAllBlock orders={orders} user={user} userSess={userSess} openModal={openModal}/>
        </>
    )
}