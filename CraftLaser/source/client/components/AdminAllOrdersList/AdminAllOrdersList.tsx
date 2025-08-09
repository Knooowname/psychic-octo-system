import React, { FC } from "react";
import './AdminAllOrdersList.css'
import { Order } from "../../shared/types/order.types";
import { OrderCard } from "../ui/OrderCard/OrderCard";
import { Status } from "../../shared/types/status.types";
import { User } from "../../shared/types/user.types";

interface AdminAllOrdersListProps {
    orders: Order[],
    status: Status[],
    users: User[]
}

export const AdminAllOrdersList: FC<AdminAllOrdersListProps> = ({ orders, status, users }) => {
    return (
        <section>
            <h2 className="admin_section_title">
                Все заказы
            </h2>
            <ul className="admin_all_orders_list">
                {orders?.map((item) => (
                    <li className="admin_all_orders_item" key={item.id}>
                        <OrderCard flag="admin" userId={item.user_id} users={users} status={status} img={item.img} created_at={item.created_at} status_id={item.status_id} address={item.address_delivery} />
                    </li>
                ))}
            </ul>
        </section>
    )
}