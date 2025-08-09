'use client'

import { Task } from "@/shared/types/task.types"
import { TabAuthorTasksInProcess } from "../TabAuthorTasksInProcess/TabAuthorTasksInProcess"
import { useGetStatus } from "@/hooks/useGetStatus"
import { useGetPriority } from "@/hooks/useGetPriority"
import { useGetExecutor } from "@/hooks/useGetExecutor"

interface Props {
    data: Task[] | []
}

export function AuthorTasksInProcess({ data }: Props) {

    const statuses = useGetStatus()
    const prioritys = useGetPriority()
    const executors = useGetExecutor()

    return (
        <div className="w-full h-full overflow-x-auto overflow-y-auto p-0 m-0 box-border" style={{ paddingRight: 200 }}>
            <table className="min-w-max table-auto border-collapse box-border">
                <thead>
                    <tr className="bg-gray-100">
                        <td className="border border-white p-2 w-32 text-left">Приоритет</td>
                        <td className="border border-white p-2 w-32 text-left">Статус</td>
                        <td className="border border-white p-2 w-32 text-left">Задача</td>
                        <td className="border border-white p-2 w-200 text-left">Дополнительная информация</td>
                        <td className="border border-white p-2 w-40 text-left">Дата создания</td>
                        <td className="border border-white p-2 w-48 text-left">Дата последнего изменения</td>
                        <td className="border border-white p-2 w-48 text-left">Дата примерного окончания</td>
                        <td className="border border-white p-2 w-32 text-left">Документы</td>
                        <td className="border border-white p-2 w-32 text-left">Исполнитель</td>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index} className="h-20 border-t-1 border-b-1 border-gray-300">
                            <TabAuthorTasksInProcess task={item} executor={executors ? executors.filter(executor => executor.id === item.executorid) : null} priority={prioritys ? prioritys?.filter(priority => String(priority.id) === String(item.priorityid)) : null} status={statuses ? statuses?.filter(status => String(status.id) === String(item.statusid)) : null}/>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
