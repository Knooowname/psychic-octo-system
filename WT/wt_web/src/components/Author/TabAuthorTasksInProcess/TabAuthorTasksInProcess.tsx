'use client'

import { Priority } from "@/shared/types/priority.types"
import { Status } from "@/shared/types/status.types"
import { Task } from "@/shared/types/task.types"
import { User } from "@/shared/types/user.types"

interface Props {
    task: Task,
    status: Status[] | null,
    priority: Priority[] | null,
    executor: User[] | null,
}

export function TabAuthorTasksInProcess({task, status, priority, executor}: Props) {

    const dateCreate = task.datecreate.slice(0, 10)
    const dateEstimatedCompletion = task.dateestimatedcompletion.slice(0, 10)

    return (
        <>
            <td className="border-r-1 border-gray-300 p-2">
                {priority ? priority[0].namepriority : ''}
            </td>
            <td className="border-r-1 border-gray-300 p-2">
                {status ? status[0].namestatus : null}
            </td>
            <td className="border-r-1 border-gray-300 p-2">
                {task.nametask}
            </td>
            <td className="border-r-1 border-gray-300 p-2">
                {task.info}
            </td>
            <td className="border-r-1 border-gray-300 p-2">
                {dateCreate}
            </td>
            <td className="border-r-1 border-gray-300 p-2">
                {task.datechange ? task.datechange : dateCreate}
            </td>
            <td className="border-r-1 border-gray-300 p-2">
                {dateEstimatedCompletion}
            </td>
            <td className="border-r-1 border-gray-300 p-2">
                {/* {task.document} */}
            </td>
            <td className="border-r-1 border-gray-300 p-2" style={{ minWidth: '150px' }}>
                {executor ? `${executor[0]?.firstname} ${executor[0]?.lastname}` : null}
            </td>
        </>
    )
}
