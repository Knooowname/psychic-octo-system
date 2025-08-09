import React from "react";
import './HomePageProductCategoriesBlock.css'

export const HomePageProductCategoriesBlock = () => {
    return (
        <section className="categories_section">
            <div className="categories_wrapper mask-tree">
                <p className="categories_descr">
                    Продукция из дерева
                </p>
            </div>
            <div className="categories_wrapper mask-metal">
                <p className="categories_descr">
                    Продукция из металла
                </p>
            </div>
        </section>
    )
}