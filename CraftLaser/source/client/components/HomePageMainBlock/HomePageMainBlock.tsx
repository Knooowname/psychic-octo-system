import React from "react"
import './HomePageMainBlock.css'
import { Button } from "../ui/Button/Button"

export const HomePageMainBlock = () => {
    return (
        <section className="home_page_main_section">
            <p className="main_bg_text text-top">
                КРАФТ
            </p>
            <p className="main_bg_text text-bottom">
                ЛАЗЕР
            </p>
            <div className="home_page_main_wrapper_info">
                <h1 className="home_page_main_title">
                    Искусство лазерной резки: Превращаем дерево и металл в уникальные шедевры
                </h1>
                <p className="home_page_main_descr">
                    Мы создаём изделия, которые сочетают точность современных технологий и тепло натуральных материалов. Используя лазерный станок, мы воплощаем ваши идеи в эксклюзивные деревянные и металлические продукты с высочайшим качеством и уникальным дизайном. Дерево и металл. Технологии и творчество. Ваш идеальный продукт — у нас.
                </p>
                <Button width="280px" height="65px" href="/catalog">
                    В каталог
                </Button>
            </div>
            <div className="home_page_main_img"></div>
        </section>
    )
}