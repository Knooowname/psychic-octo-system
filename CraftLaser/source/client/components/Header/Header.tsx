import React, { useEffect, useState } from "react"
import { HeaderLink } from "../ui/HeaderLink/HeaderLink"
import './Header.css'
import { Button } from "../ui/Button/Button"
import { Link } from "react-router-dom"
import { User } from "../../shared/types/user.types"
import Cookies from "js-cookie"
import { api } from "../../api/api"
import { APICOMMAND } from "../../shared/types/command.types"
import config from '../../../config/config.json'

export const Header = () => {

    const [user, setUser] = useState<User | null>(null)
    const [isVisible, setIsVisible] = useState<boolean>(false)
    const [isVisibleSearch, setIsVisibleSearch] = useState<boolean>(false)
    const userSess = Cookies.get('user_sess')

    useEffect(() => {
        if(userSess) {
            async function fetchUserForSess() {
                const response = await api(APICOMMAND.authCode, {}, String(userSess), config)
                const userData = await response.json()
                setUser(userData.data)
            }
            fetchUserForSess()
        } else {
            setUser(null)
        }
    }, [userSess])

    const handleClickSearch = () => {
        setIsVisibleSearch(prev => prev = !prev)
    }

    return (
        <div className="header_wrapper">
            <div className="header_bg_layer"></div>
            <div className="header_wrapper_content">
                <picture className="header_logo_pic">
                    <a href="/">
                        <img src="static/assets/img/header_logo.png" className="header_logo_img" alt="" />
                    </a>
                </picture>
                <ul className="header_nav_list">
                    <li className="header_nav_item">
                        <HeaderLink href="/">
                            Главная
                        </HeaderLink>
                    </li>
                    <li className="header_nav_item">
                        <HeaderLink href="/about">
                            О нас
                        </HeaderLink>
                    </li>
                    <li className="header_nav_item">
                        <HeaderLink href="/catalog">
                            Каталог
                        </HeaderLink>
                    </li>
                    <li className="header_nav_item">
                        <HeaderLink href="/reviews">
                            Отзывы
                        </HeaderLink>
                    </li>
                </ul>
                <div className="header_wrapper_btns">
                    <div className="header_search_wrapper">
                        <input className={`header_search_input ${isVisibleSearch ? 'header_search_input-active' : ''}`} type="search" placeholder="Поиск..."/>
                        <button className="header_search_btn" onClick={handleClickSearch}>
                            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.5 16C12.6422 16 16 12.6422 16 8.5C16 4.35779 12.6422 1 8.5 1C4.35779 1 1 4.35779 1 8.5C1 12.6422 4.35779 16 8.5 16Z" stroke="white" />
                                <path d="M11.3285 5.1715C10.9574 4.79963 10.5165 4.50471 10.0311 4.30367C9.5457 4.10264 9.02538 3.99944 8.50001 4C7.97463 3.99944 7.45432 4.10264 6.96893 4.30367C6.48354 4.50471 6.04263 4.79963 5.67151 5.1715M14 14L20.5 20.5" stroke="white" />
                            </svg>
                        </button>
                    </div>
                    {user ?
                        <button className="active_user_btn">
                            <a className="active_user_link" href="/account"></a>
                        </button>
                        : <Button href="/auth" padding="0" width="173px" height="53px">
                            Войти
                        </Button>
                    }
                </div>
            </div>
        </div>
    )
}
