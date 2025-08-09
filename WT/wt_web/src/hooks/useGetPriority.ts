import { fetchConfig } from "@/api/fetchConfig"
import { api } from "@/pages/api/api"
import { APICOMMAND } from "@/shared/types/command.types"
import { Priority } from "@/shared/types/priority.types"
// import { Task } from "@/shared/types/task.types"
import { useEffect, useState } from "react"

export const useGetPriority = () => {
    const [prioritys, setPrioritys] = useState<Priority[] | null>(null)

    useEffect(() => {
        const fetchPrioritys = async () => {
            const config = await fetchConfig()
            const response = await api(APICOMMAND.GETPRIORITY, {}, config)
            const dataPriority = await response?.json()
            setPrioritys(dataPriority.data)
        }
        fetchPrioritys()
    }, [])

    // const filteredPriority = prioritys?.filter(item => String(item.id) === String(data.priorityid))

    return prioritys
}