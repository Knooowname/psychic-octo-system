import React from "react";
import './AboutPageMainBlock.css'
import { AdvantagesAllList } from "../ui/AdvantagesAllList/AdvantagesAllList";

export const AboutPageMainBlock = () => {
    return (
        <section className="about_main_section">
            <span className="about_main_span">
                About us
            </span>
            <h1 className="about_main_title">
                Искусство лазерной резки: Превращаем дерево и металл в уникальные шедевры
            </h1>
            <picture className="about_main_pic">
                <img className="about_main_img" src="static/assets/img/about-page-main-img.png" />
            </picture>
            <AdvantagesAllList/>
        </section>
    )   
}