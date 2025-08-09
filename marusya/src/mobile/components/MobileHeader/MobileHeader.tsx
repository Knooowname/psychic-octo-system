import { Link } from 'react-router'
import './MobileHeader.css'

export const MobileHeader = () => {
    return (
        <div className='mobile_header_wrapper'>
            <Link to={'/'} className='mobile_header_logo_link'>
                {/* <picture className='mobile_pic'> */}
                    <img className='mobile_img' src="../src/assets/icons/mobile_logo.png" alt="Логотип VK Маруся" />
                {/* </picture> */}
            </Link>
            <ul className='header_mobile_list'>
                <li className='header_mobile_item'>
                    <button className='mobile_header_btn'>
                        <img className='mobile_menu_icons' src="../src/assets/icons/mobile_menu.svg" alt="" />
                    </button>
                </li>
                <li className='header_mobile_item'>
                    <button className='mobile_header_btn'>
                        <img className='mobile_menu_icons' src="../src/assets/icons/search.svg" alt="" />
                    </button>
                </li>
                <li className='header_mobile_item'>
                    <button className='mobile_header_btn'>
                        <img className='mobile_menu_icons' src="../src/assets/icons/mobile_account.svg" alt="" />
                    </button>
                </li>
            </ul>
        </div>
    )
}