import React, { FC } from "react";
import './OrderCard.css'
import { Status } from "../../../shared/types/status.types";
import { Order } from "../../../shared/types/order.types";
import { Product } from "../../../shared/types/product.types";
import { User } from "../../../shared/types/user.types";

interface OrderCardProps {
  img: string,
  address: string,
  status_id: string,
  created_at: string,
  status: Status[],
  orders?: Order[],
  products?: Product[],
  users?: User[],
  userId?: string,
  flag?: 'admin' | 'user',
}

export const OrderCard: FC<OrderCardProps> = ({ img, address, status_id, created_at, status, orders, products, userId, users, flag }) => {

  const filteredStatus = status?.filter(item => item.id === status_id)

  const currentUser = users?.filter(user => user.id === userId)

  if (flag === 'admin') {
    return (
      <>
        <div className="account_orders_wrapper">
          <div className="account_item_wrapper_img">
            <span className="account_item_img">
              {img ?
                <img src={img} />
                : <span className="no_img_span">NO IMAGE</span>
              }
            </span>
          </div>
        </div>
        <div className="account_orders_wrapper">
          <span className="account_orders_span">
            Заказчик:
          </span>
          <p className="account_orders_descr">
            {currentUser ? currentUser[0]?.last_name + ' ' + currentUser[0]?.first_name : ''}
          </p>
        </div>
        <div className="account_orders_wrapper">
          <span className="account_orders_span">
            Телефон заказчика:
          </span>
          <p className="account_orders_descr">
            {currentUser ? currentUser[0]?.phone : ''}
          </p>
        </div>
        <div className="account_orders_wrapper">
          <span className="account_orders_span">
            Адрес доставки:
          </span>
          <p className="account_orders_descr">
            {address}
          </p>
        </div>
        <div className="account_orders_wrapper">
          <span className="account_orders_span">
            Статус доставки:
          </span>
          <p className="account_orders_descr">
            {filteredStatus ? filteredStatus[0]?.name_status : ''}
          </p>
        </div>
        <div className="account_orders_wrapper">
          <span className="account_orders_span">
            Дата заказа:
          </span>
          <p className="account_orders_descr">
            {created_at.slice(0, 10).split('-').reverse().join('-')}
          </p>
        </div>
      </>
    )
  }

  return (
    <>
      <div className="account_orders_wrapper">
        <div className="account_item_wrapper_img">
          <span className="account_item_img">
            {img ?
              <img src={img} />
              : <span className="no_img_span">NO IMAGE</span>
            }
          </span>
        </div>
      </div>
      <div className="account_orders_wrapper">
        <span className="account_orders_span">
          Адрес доставки:
        </span>
        <p className="account_orders_descr">
          {address}
        </p>
      </div>
      <div className="account_orders_wrapper">
        <span className="account_orders_span">
          Статус доставки:
        </span>
        <p className="account_orders_descr">
          {filteredStatus ? filteredStatus[0]?.name_status : ''}
        </p>
      </div>
      <div className="account_orders_wrapper">
        <span className="account_orders_span">
          Дата заказа:
        </span>
        <p className="account_orders_descr">
          {created_at.slice(0, 10).split('-').reverse().join('-')}
        </p>
      </div>
    </>
  )
}