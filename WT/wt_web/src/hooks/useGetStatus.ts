import { fetchConfig } from "@/api/fetchConfig"
import { api } from "@/pages/api/api"
import { APICOMMAND } from "@/shared/types/command.types"
import { Status } from "@/shared/types/status.types"
import { useEffect, useState } from "react"

export const useGetStatus = () => {
    const [status, setStatus] = useState<Status[] | null>(null)

    useEffect(() => {
        const fetchStatus = async () => {
            const config = await fetchConfig()
            const responseStatus = await api(APICOMMAND.GETSTATUS, {}, config)
            const dataStatus = await responseStatus?.json()
            setStatus(dataStatus.data)
        }
        fetchStatus()
    }, [])

    // const filteredStatus = status?.filter(item => item.id === String(data.statusid))

    return status
}