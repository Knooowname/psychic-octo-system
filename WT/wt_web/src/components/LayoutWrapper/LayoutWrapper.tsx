'use client'

import LeftMenu from "@/app/(home)/LeftMenu"
import { usePathname } from "next/navigation"

export function LayoutWrapper({children}: {children: React.ReactNode}) {
    
    const pathName = usePathname()
    const noMenuPages = ['/auth', '/register']

    if(!pathName) {
        return null
    }

    const showMenu = !noMenuPages.includes(pathName)

    return (
        <>
            {showMenu && <LeftMenu/>}
            {children}
        </>
    )
}
