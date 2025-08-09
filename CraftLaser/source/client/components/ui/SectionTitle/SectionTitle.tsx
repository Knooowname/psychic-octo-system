import React, { FC } from "react"
import './SectionTitle.css'

interface SectionTitleProps {
    title: string,
    text: string,
    marginB: string,
}

export const SectionTitle: FC<SectionTitleProps> = ({ title, text, marginB }) => {
    return (
        <div className="section_title_text_wrapper" style={{ marginBottom: `${marginB}` }}>
            <h2 className="section_title">
                {title}
            </h2>
            <p className="section_text">
                {text}
            </p>
        </div>
    )
}