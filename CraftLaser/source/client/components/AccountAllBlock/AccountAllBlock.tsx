import React, { FC, useEffect, useState } from "react"
import './AccountAllBlock.css'
import { User } from "../../shared/types/user.types"
import { api } from "../../api/api"
import { APICOMMAND } from "../../shared/types/command.types"
import Cookies from "js-cookie"
import config from '../../../config/config.json'
import { AccountOrders } from "../AccountOrders/AccountOrders"
import { AccountSettings } from "../AccountSettings/AccountSettings"
import { Order } from "../../shared/types/order.types"

interface AccountAllBlockProps {
    openModal?: () => void,
    user: User | null,
    userSess: string,
    orders: Order[]
}

export const AccountAllBlock: FC<AccountAllBlockProps> = ({ openModal, user, userSess, orders }) => {

    const [status, setStatus] = useState(null)
    const [activeTab, setActiveTab] = useState<'orders' | 'settings'>('orders')

    useEffect(() => {
        async function fetchUserForSess() {
            const responseStatus = await api(APICOMMAND.selectStatus, {}, String(userSess), config)
            const statusData = await responseStatus.json()
            setStatus(statusData.data)
        }
        fetchUserForSess()
    }, [])

    return (
        <section className="account_section">
            <h1 className="account_title">
                Мой аккаунт
            </h1>
            <div className="account_btns_wrapper">
                <button className={`account_btn btn-basket ${activeTab === 'orders' ? 'account_btn-active' : ''}`} onClick={() => setActiveTab('orders')}>
                    Мои заказы
                </button>
                <button className={`account_btn btn-gear ${activeTab === 'settings' ? 'account_btn-active' : ''}`} onClick={() => setActiveTab('settings')}>
                    Настройки аккаунта
                </button>
            </div>
            {activeTab === 'orders' ?
                <AccountOrders orders={orders} user={user} status={status ? status : null}/>
                : <AccountSettings openModal={openModal} userSess={userSess} user={user ? user : null}/>
            }
        </section>
    )
}
