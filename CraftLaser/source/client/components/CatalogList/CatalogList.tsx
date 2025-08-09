import React, { FC, useEffect, useState } from "react";
import './CatalogList.css'
import { CatalogCard } from "../ui/CatalogCard/CatalogCard";
import { Product } from "../../shared/types/product.types";
import { api } from "../../api/api";
import { APICOMMAND } from "../../shared/types/command.types";
import Cookies from "js-cookie";
import config from '../../../config/config.json'
import { User } from "../../shared/types/user.types";

interface CatalogListProps {
    selectedMaterials: string[]
}

export const fakeDataArr = [
        {
            id: '1',
            img: 'static/assets/img/catalog-card-img-1.png',
            title: 'Изделие из дерева',
            description: 'WoodCraft Laser — это уникальные изделия из натурального дерева, созданные с помощью высокоточной лазерной резки и гравировки. ',
            price: '2.000',
        },
        {
            id: '2',
            img: 'static/assets/img/catalog-card-img-2.png',
            title: 'Изделие из дерева',
            description: 'WoodCraft Laser — это уникальные изделия из натурального дерева, созданные с помощью высокоточной лазерной резки и гравировки. ',
            price: '2.000',
        },
        {
            id: '3',
            img: 'static/assets/img/catalog-card-img-3.png',
            title: 'Изделие из дерева',
            description: 'WoodCraft Laser — это уникальные изделия из натурального дерева, созданные с помощью высокоточной лазерной резки и гравировки. ',
            price: '2.000',
        },
        {
            id: '4',
            img: 'static/assets/img/catalog-card-img-4.png',
            title: 'Изделие из дерева',
            description: 'WoodCraft Laser — это уникальные изделия из натурального дерева, созданные с помощью высокоточной лазерной резки и гравировки. ',
            price: '2.000',
        },
        {
            id: '5',
            img: 'static/assets/img/catalog-card-img-5.png',
            title: 'Изделие из дерева',
            description: 'WoodCraft Laser — это уникальные изделия из натурального дерева, созданные с помощью высокоточной лазерной резки и гравировки. ',
            price: '2.000',
        },
        {
            id: '6',
            img: 'static/assets/img/catalog-card-img-6.png',
            title: 'Изделие из дерева',
            description: 'WoodCraft Laser — это уникальные изделия из натурального дерева, созданные с помощью высокоточной лазерной резки и гравировки. ',
            price: '2.000',
        }
    ]

export const CatalogList: FC<CatalogListProps> = ({ selectedMaterials }) => {
    
    const [products, setProducts] = useState<Product[] | null>(null)
    const [user, setUser] = useState<User | null>(null)
    const userSess = Cookies.get('user_sess')

    const filteredProducts = products?.filter(product => {
        return selectedMaterials.length === 0 || selectedMaterials.includes(product.material_id)
    }) || []

    useEffect(() => {
        const fetchProducts = async () => {
            const responseUser = await api(APICOMMAND.authCode, {}, String(userSess), config)
            const userData = await responseUser.json()
            setUser(userData.data)
            const response = await api(APICOMMAND.selectProduct, {}, userSess, config)
            const productData = await response.json()
            setProducts(productData.data)
        }
        fetchProducts()
    }, [])

    return (
        <ul className="catalog_list_products">
            {/* Тут заменить на filteredProducts  */}
            {fakeDataArr.map((item, index) => (
                <li key={index} className="catalog_item_products">
                    <CatalogCard idProduct={item.id} img={item.img} title={item.title} description={item.description} price={item.price} userSess={userSess} products={products ? products : null} user={user ? user : null}/>
                </li>
            ))}
        </ul>
    )
}