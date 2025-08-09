import React from "react";
import './AboutPageCompanyInfo.css'
import { SectionTitle } from "../ui/SectionTitle/SectionTitle";

export const AboutPageCompanyInfo = () => {
    return (
        <section>
            <SectionTitle title="О компании" text="About company" marginB="48px" />
            <ul className="about_company_list">
                <li className="about_company_item">
                    <picture className="about_company_pic">
                        <img className="about_company_img" src="static/assets/img/about-company-img-1.png" />
                    </picture>
                    <div>
                        <h4 className="about_company_title">
                            Общая информация
                        </h4>
                        <div className="about_company_descr_wrapper">
                            <p className="about_company_descr">
                                Дерево и металл. Технологии и творчество. Ваш идеальный продукт — у нас. Мы создаём изделия, которые сочетают точность современных технологий и тепло натуральных материалов. Используя лазерный станок, мы воплощаем ваши идеи в эксклюзивные деревянные и металлические продукты с высочайшим качеством и уникальным дизайном.
                            </p>
                            <p className="about_company_descr">
                                Дерево и металл. Технологии и творчество. Ваш идеальный продукт — у нас. Мы создаём изделия, которые сочетают точность современных технологий и тепло натуральных материалов. Используя лазерный станок, мы воплощаем ваши идеи в эксклюзивные деревянные и металлические продукты с высочайшим качеством и уникальным дизайном.
                            </p>
                        </div>
                    </div>
                </li>
                <li className="about_company_item">
                    <div>
                        <h4 className="about_company_title">
                            Специфика работы
                        </h4>
                        <div className="about_company_descr_wrapper">
                            <p className="about_company_descr">
                                Дерево и металл. Технологии и творчество. Ваш идеальный продукт — у нас. Мы создаём изделия, которые сочетают точность современных технологий и тепло натуральных материалов. Используя лазерный станок, мы воплощаем ваши идеи в эксклюзивные деревянные и металлические продукты с высочайшим качеством и уникальным дизайном.
                            </p>
                            <p className="about_company_descr">
                                Дерево и металл. Технологии и творчество. Ваш идеальный продукт — у нас. Мы создаём изделия, которые сочетают точность современных технологий и тепло натуральных материалов. Используя лазерный станок, мы воплощаем ваши идеи в эксклюзивные деревянные и металлические продукты с высочайшим качеством и уникальным дизайном.
                            </p>
                        </div>
                    </div>
                    <picture className="about_company_pic">
                        <img className="about_company_img" src="static/assets/img/about-company-img-2.png" />
                    </picture>
                </li>
            </ul>
        </section>
    )
}