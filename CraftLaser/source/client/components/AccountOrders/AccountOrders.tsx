import React, { FC } from "react"
import './AccountOrders.css'
import { Order } from "../../shared/types/order.types"
import { Status } from "../../shared/types/status.types"
import { OrderCard } from "../ui/OrderCard/OrderCard"
import { User } from "../../shared/types/user.types"

interface AccountOrdersProps {
  status: Status[] | null,
  user: User,
  orders: Order[]
}

// const fakeDataOrders: Order[] = [
//     {
//       id: '1',
//       img: '',
//       product_id: '1',
//       user_id: '1',
//       address_delivery: 'ул. Коли Мяготина стр. 106',
//       status_id: '1',
//       created_at: '2025-07-31',
//       finished_at: null,
//     },
//     {
//       id: '2',
//       img: '',
//       product_id: '2',
//       user_id: '1',
//       address_delivery: 'ул. Коли Мяготина стр. 106',
//       status_id: '1',
//       created_at: '2025-07-31',
//       finished_at: null,
//     },
//     {
//       id: '3',
//       img: '',
//       product_id: '3',
//       user_id: '1',
//       address_delivery: 'ул. Коли Мяготина стр. 106',
//       status_id: '1',
//       created_at: '2025-07-31',
//       finished_at: null,
//     },
//     {
//       id: '4',
//       img: '',
//       product_id: '4',
//       user_id: '1',
//       address_delivery: 'ул. Коли Мяготина стр. 106',
//       status_id: '1',
//       created_at: '2025-07-31',
//       finished_at: null,
//     },
//   ]

export const AccountOrders: FC<AccountOrdersProps> = ({ status, user, orders }) => {

  const filteredOrderForUser = orders?.filter(order => order.user_id === user.id)

  return (
    <>
      <ul className="account_orders_list">
        {filteredOrderForUser && filteredOrderForUser.length !== 0 ? filteredOrderForUser?.map((item) => (
          <li key={item.id} className="account_orders_item">
            <OrderCard status={status} img={item?.img} address={item?.address_delivery} created_at={item?.created_at} status_id={item?.status_id}/>
          </li>
        ))
        : <p className="no_orders_descr">У Вас нет ни одного заказа</p>
        }
      </ul>
    </>
  )
}