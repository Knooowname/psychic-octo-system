'use client'

import { useGetExecutor } from "@/hooks/useGetExecutor"
import { useGetPriority } from "@/hooks/useGetPriority"
import { useGetStatus } from "@/hooks/useGetStatus"
import { Priority } from "@/shared/types/priority.types"
import { Status } from "@/shared/types/status.types"
import { Task } from "@/shared/types/task.types"
import { User } from "@/shared/types/user.types"

interface Props {
    data: Task,
    status: Status[] | null,
    priority: Priority[] | null,
    executor: User[] | null,
}

export function TabAuthorAllTasks({ data, status, priority, executor }: Props) {

    return (
        <>
            <td className="border-r-1 border-gray-300 p-2">
                {priority ? priority[0].namepriority : ''}
            </td>
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
                {/* {data.document} */}
            </td>
            <td className="border-r-1 border-gray-300 p-2" style={{ minWidth: '150px' }}>
                {executor ? `${executor[0]?.firstname} ${executor[0]?.lastname}` : null}
            </td>
        </>
    )
}
