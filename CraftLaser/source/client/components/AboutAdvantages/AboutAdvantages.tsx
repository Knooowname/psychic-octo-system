import React from 'react'
import { SectionTitle } from '../ui/SectionTitle/SectionTitle'
import './AboutAdvantages.css'

export const AboutAdvantages = () => {
    return (
        <section>
            <SectionTitle title="Почему выбирают нас" text="Advantages" marginB="48px" />
            <ul className="advantages_page_list">
                <li className="advantages_page_item">
                    <div className="advantages_page_wrapper_icon advantages-icon-1">
                    </div>
                    <h5 className="advantages_page_item_title">
                        Честные сроки
                    </h5>
                    <p className="advantages_page_item_descr">
                        Дерево и металл. Технологии и творчество. Ваш идеальный продукт — у нас. Мы создаём изделия, которые сочетают точность современных технологий
                    </p>
                </li>
                <li className="advantages_page_item">
                    <div className="advantages_page_wrapper_icon advantages-icon-2">
                    </div>
                    <h5 className="advantages_page_item_title">
                        Индивидуальный подход
                    </h5>
                    <p className="advantages_page_item_descr">
                        Дерево и металл. Технологии и творчество. Ваш идеальный продукт — у нас. Мы создаём изделия, которые сочетают точность современных технологий
                    </p>
                </li>
                <li className="advantages_page_item">
                    <div className="advantages_page_wrapper_icon advantages-icon-3">
                    </div>
                    <h5 className="advantages_page_item_title">
                        Помощь с разработкой макетов
                    </h5>
                    <p className="advantages_page_item_descr">
                        Дерево и металл. Технологии и творчество. Ваш идеальный продукт — у нас. Мы создаём изделия, которые сочетают точность современных технологий
                    </p>
                </li>
                <li className="advantages_page_item">
                    <div className="advantages_page_wrapper_icon advantages-icon-4">
                    </div>
                    <h5 className="advantages_page_item_title">
                        Современное оборудование
                    </h5>
                    <p className="advantages_page_item_descr">
                        Дерево и металл. Технологии и творчество. Ваш идеальный продукт — у нас. Мы создаём изделия, которые сочетают точность современных технологий
                    </p>
                </li>
            </ul>
        </section>
    )
}