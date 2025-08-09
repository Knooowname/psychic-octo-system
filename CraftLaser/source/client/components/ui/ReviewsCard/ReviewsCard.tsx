import React, { FC } from "react";
import './ReviewsCard.css'

interface ReviewsCardProps {
    name: string,
    surname: string,
    text: string,
}

export const ReviewsCard: FC<ReviewsCardProps> = ({ name, surname, text }) => {
    return (
        <div className="wrapper_reviews_card">
            <div className="wrapper_reviews_card_user_info">
                <div className="wrapper_reviews_card_user_img"></div>
                <div className="wrapper_reviews_card_user_data">
                    <p className="reviews_card_user_name">
                        {name}
                    </p>
                    <p className="reviews_card_user_name">
                        {surname}
                    </p>
                </div>
            </div>
            <p className="reviews_comment">
                Комментарий
            </p>
            <p className="reviews_descr">
                {text}
            </p>
        </div>
    )
}