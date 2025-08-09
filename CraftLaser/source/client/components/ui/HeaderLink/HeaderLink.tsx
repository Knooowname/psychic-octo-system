import React, { FC } from "react"
import './HeaderLink.css'

interface HeaderLinkProps {
    children: React.ReactNode,
    href?: string,
}

export const HeaderLink: FC<HeaderLinkProps> = ({ href, children }) => {
    return (
        <a href={href} className="header_link">
            {children}
        </a>
    )
}