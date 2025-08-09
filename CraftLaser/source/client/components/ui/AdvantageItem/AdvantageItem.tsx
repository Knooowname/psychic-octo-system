import React, { FC } from "react";
import './AdvantageItem.css'

interface AdvantageItemProps { 
    advantage: string,
    text: string,
}

export const AdvantageItem: FC<AdvantageItemProps> = ({ advantage, text }) => {
    return (
        <div className="advantage_wrapper">
            <p className="advantage_stats">
                {advantage}
            </p>
            <p className="advantage_text">
                {text}
            </p>
        </div>
    )
}