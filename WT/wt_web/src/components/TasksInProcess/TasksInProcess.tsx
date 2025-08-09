import { Task } from "@/shared/types/task.types";
import { TabTasksInProcess } from "../TabTasksInProcess/TabTasksInProcess";
import { useGetStatus } from "@/hooks/useGetStatus";
import { useGetAuthor } from "@/hooks/useGetAuthor";
import { useGetPriority } from "@/hooks/useGetPriority";

export interface Props {
    dataArr: Task[] | []
}

export function TasksInProcess({dataArr}: Props) {

  const statuses = useGetStatus()
  const authors = useGetAuthor()
  const prioritys = useGetPriority()

  return (
    <div className="overflow-x-auto overflow-y-auto"  style={{ paddingRight: 200 }}>
      <table className="min-w-max w-full table-auto border-collapse">
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
            <td className="border border-white p-2 w-32 text-left">Автор</td>
          </tr>
        </thead>
        <tbody>
            {dataArr?.map((item, index) => (
                <tr key={index} className="h-20 border-t-1 border-b-1 border-gray-300">
                     <TabTasksInProcess data={item} priority={prioritys ? prioritys.filter(priority => priority.id === String(item.priorityid)) : null} author={authors ? authors.filter(author => author.id === item.authorid) : null} status={statuses ? statuses.filter(status => status.id === String(item.statusid)) : null} />
                </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
