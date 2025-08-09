import { fetchConfig } from "@/api/fetchConfig"
import { api } from "@/pages/api/api"
import { APICOMMAND } from "@/shared/types/command.types"
import { Task } from "@/shared/types/task.types"
import { User } from "@/shared/types/user.types"
import { useEffect, useState } from "react"

export const useGetAuthor = () => {
    
    const [authors, setAuthor] = useState<User[] | null>(null)
    
    useEffect(() => {
        async function fetchUsers () {
            const config = await fetchConfig()
            const response = await api(APICOMMAND.GETUSERS, {}, config)
            const dataUsers = await response?.json()
            setAuthor(dataUsers.data)
        }

        fetchUsers()
    }, [])

    return authors
}