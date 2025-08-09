import { Priority } from "@/shared/types/priority.types"
import { Status } from "@/shared/types/status.types"
import { Task } from "@/shared/types/task.types"
import { User } from "@/shared/types/user.types"

interface Props {
    data: Task,
    author: User[] | null,
    status: Status[] | null,
    priority: Priority[] | null,
}

export function TabTasksInProcess({ data, author, status, priority }: Props) {
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
                {data.dateend}
            </td>
            <td className="border-r-1 border-gray-300 p-2">
                {data.datechange}
            </td>
            <td className="border-r-1 border-gray-300 p-2">
                {/* {data.document} */}
            </td>
            <td className="border-r-1 border-gray-300 p-2">
                {author ? `${author[0]?.firstname} ${author[0]?.lastname}` : null}
            </td>
        </>
    )
}
