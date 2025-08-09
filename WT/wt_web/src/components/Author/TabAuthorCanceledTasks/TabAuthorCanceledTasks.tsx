'use client'

import { useGetExecutor } from "@/hooks/useGetExecutor"
import { useGetStatus } from "@/hooks/useGetStatus"
import { Status } from "@/shared/types/status.types"
import { Task } from "@/shared/types/task.types"
import { User } from "@/shared/types/user.types"

interface Props {
    data: Task,
    status: Status[] | null,
    executor: User[] | null,
}

export function TabAuthorCanceledTasks({ data, status, executor }: Props) {

    return (
        <>
            <td className="border-r-1 border-gray-300 p-2">
                {status ? status[0].namestatus : ''}
            </td>
            <td className="border-r-1 border-gray-300 p-2">
                {data.nametask}
            </td>
            <td className="border-r-1 border-gray-300 p-2">
                {data.info}
            </td>
            <td className="border-r-1 border-gray-300 p-2">
                {data.datecreate}
            </td>
            <td className="border-r-1 border-gray-300 p-2">
                {data.datechange}
            </td>
            <td className="border-r-1 border-gray-300 p-2">
                {data.dateestimatedcompletion}
            </td>
            <td className="border-r-1 border-gray-300 p-2">
                {data.dateend}
            </td>
            <td className="border-r-1 border-gray-300 p-2" style={{ minWidth: '150px' }}>
                {executor ? `${executor[0]?.firstname} ${executor[0]?.lastname}` : null}
            </td>
        </>
    )
}
