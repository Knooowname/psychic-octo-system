import React from "react";
import './AdvantagesAllList.css'
import { AdvantageItem } from "../AdvantageItem/AdvantageItem";

export const AdvantagesAllList = () => {
    return (
        <div className="advantages_list_wrapper">
            <ul className="advantages_list">
                <li className="advantages_item">
                    <AdvantageItem advantage="3+" text="Лет на рынке" />
                    <div className="linear_line"></div>
                </li>
                <li className="advantages_item">
                    <AdvantageItem advantage="120+" text="Выполненных проектов" />
                    <div className="linear_line"></div>
                </li>
                <li className="advantages_item">
                    <AdvantageItem advantage="100%" text="Довольных клиентов" />
                </li>
            </ul>
        </div>
    )
}