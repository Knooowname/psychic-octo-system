import { FC } from "react"
import './Top10MovieCard.css'

export interface Top10MovieCardProps {
    count: number,
    image: string,
    display?: boolean,
    closeBtn?: boolean,
    delMovie?: () => void,
}

export const Top10MovieCard: FC<Top10MovieCardProps> = ({count, image, display, closeBtn, delMovie}) => {
    return (
        <div className="wrapper_all_card">
            <button className={`${closeBtn ? 'close_btn_active' : 'close_btn_no_active'}`} onClick={delMovie}></button>
            <div className="wrapper_card_count" data-variant={display}>
                <span className="card_count" data-variant={display}>{count}</span>
            </div>
            {image ? 
            <picture className="card_pic">
                <img className="card_img" src={image} alt={image ? 'Poster movie' : ''} />
            </picture>
            : <div className="card_img wrapper_descr_no_img">
                <p className="no_img_descr">No Image</p>
            </div>
            }
        </div>
    )
}