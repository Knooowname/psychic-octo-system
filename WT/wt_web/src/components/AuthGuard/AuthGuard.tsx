'use client'

import { useAppSelector } from "@/hooks/useAppSelector"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export function AuthGuard({children}: {children: React.ReactNode}) {
    
    //const user = useAppSelector(state => state.user.user)
    
    const test =  localStorage.getItem('user');
    if(!test){return}
    const user = JSON.parse(test);
    const router = useRouter()

    useEffect(() => {
        if(!user) {
            router.push('/auth')
        }
    }, [user])

    return (
        <>
            {children}
        </>
    )
}
