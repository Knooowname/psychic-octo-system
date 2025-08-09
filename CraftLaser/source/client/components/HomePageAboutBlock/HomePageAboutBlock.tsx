import React from "react";
import './HomePageAboutBlock.css'
import { SectionTitle } from "../ui/SectionTitle/SectionTitle";
import { AdvantagesAllList } from "../ui/AdvantagesAllList/AdvantagesAllList";

export const HomePageAboutBlock = () => {
    return (
        <section>
            <SectionTitle title="О нас" text="About us" marginB="24px"/>
            <p className="about_block_descr">
                Мы создаём изделия, которые сочетают точность современных технологий и тепло натуральных материалов. 
                Используя лазерный станок, мы воплощаем ваши идеи в эксклюзивные деревянные и металлические продукты с высочайшим качеством и уникальным дизайном.
            </p>
            <p className="about_block_descr descr-pad">
                Дерево и металл. Технологии и творчество. Ваш идеальный продукт — у нас. 
                Мы создаём изделия, которые сочетают точность современных технологий и тепло натуральных материалов. 
                Используя лазерный станок, мы воплощаем ваши идеи в эксклюзивные деревянные и металлические продукты с высочайшим качеством и уникальным дизайном.
            </p>
            <AdvantagesAllList/>
        </section>
    )
}