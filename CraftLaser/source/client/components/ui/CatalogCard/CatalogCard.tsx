import React, { FC, useEffect, useState } from "react";
import './CatalogCard.css'
import { Button } from "../Button/Button";
import { User } from "../../../shared/types/user.types";
import Cookies from "js-cookie";
import { api } from "../../../api/api";
import { APICOMMAND } from "../../../shared/types/command.types";
import config from '../../../../config/config.json'
import { Product } from "../../../shared/types/product.types";

interface CatalogCardProps {
    img: string,
    title: string,
    description: string,
    price: string,
    idProduct: string,
    products: Product[] | null,
    user: User | null,
    userSess: string,
}

export const CatalogCard: FC<CatalogCardProps> = ({ idProduct, userSess, img, title, description, price, products, user }) => {
    
    const handleClickAddProduct = async () => {

        const args = {
            "product_id": `${idProduct}`, 
            "user_id": `${user.id}`, 
            "address_delivery": `${user.address}` 
        }

        const response = await api(APICOMMAND.addNewReqProduct, args, userSess, config)
        const newReqData = await response.json()
        console.log(newReqData)
    }

    const handleClickReplace = () => {
        window.location.replace('/auth')
    }

    return (
        <div className="catalog_card_wrapper">
            <picture className="catalog_card_pic">
                <img className="catalog_card_img" src={img} alt={title} />
            </picture>
            <div className="catalog_card_wrapper_info">
                <h5 className="catalog_card_title">
                    {title}
                </h5>
                <p className="catalog_card_descr">
                    {description}
                </p>
                <div className="catalog_card_wrapper_price_and_button">
                    <p className="catalog_card_price">
                        {`${price} руб`}
                    </p>
                    <Button onClick={user ? handleClickAddProduct : handleClickReplace} width="120px" height="40px" fontSize="14px" fontWeight="600" padding="0">
                        Заказать    
                    </Button>
                </div>
            </div>
        </div>
    )
}