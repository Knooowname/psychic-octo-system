import React, { FC } from "react";
import { FeedbackForm } from "../../../../components/FeedbackForm/FeedbackForm";
import {ReviewsPageMainBlock} from "../../../../components/ReviewsPageMainBlock/ReviewsPageMainBlock"
import './ReviewsPage.css'
import { InputField } from "../../../../shared/types/inputField.types";
import { User } from "../../../../shared/types/user.types";
import { Review } from "../../../../shared/types/review.types";

interface ReviewsPageProps {
    user: User | null,
    userSess: string,
    review: Review[]
}

export const ReviewsPage: FC<ReviewsPageProps> = ({ user, userSess, review }) => {
    
    const fields: InputField[] = [
        {
            name: 'lastname',
            type: 'text',
            placeholder: 'Имя:'
        },
        {
            name: 'firstname',
            type: 'text',
            placeholder: 'Фамилия:'
        },
        {
            name: 'review',
            type: 'text',
            placeholder: 'Комментарий:'
        },
    ]

    return (
        <>
            <div className="reviews_pd"></div>
            <ReviewsPageMainBlock review={review}/>
            <FeedbackForm formTitle="Оставьте отзыв" formDescr="." fields={fields} fieldsToValidate={'review'} fieldsToSend={['review']} user={user} userSess={userSess} formType={'review'}/>
        </>
    )
}