import './Footer.css'

export const Footer = () => {
    return (
        <div className="footer_wrapper_btn">
            <button className="footer_btn">
                <img className='footer_btn_icon' src="./src/assets/icons/vk.svg" alt="vk" />
            </button>
            <button className="footer_btn">
                <img className='footer_btn_icon' src="./src/assets/icons/yt.svg" alt="yt" />
            </button>
            <button className="footer_btn">
                <img className='footer_btn_icon' src="./src/assets/icons/odn.svg" alt="odn" />
            </button>
            <button className="footer_btn">
                <img className='footer_btn_icon' src="./src/assets/icons/tg.svg" alt="tg" />
            </button>
        </div>
    )
}