import { Task } from "@/shared/types/task.types";
import { TabAllTask } from "../TabAllTask/TabAllTask";
import { useGetAuthor } from "@/hooks/useGetAuthor";
import { useGetPriority } from "@/hooks/useGetPriority";
import { useGetStatus } from "@/hooks/useGetStatus";

interface Props {
    dataArr: Task[] | []
}

export function AllTasks({dataArr}: Props) {

  const authors = useGetAuthor()
  const prioritys = useGetPriority()
  const statuses = useGetStatus()

    return (
                <div className="overflow-x-auto overflow-y-auto">
                  <table className="min-w-max w-full table-auto border-collapse">
                    <thead>
                      <tr className="bg-gray-100">
                        <td className="border border-white p-2 w-32 text-left">Статус</td>
                        <td className="border border-white p-2 w-32 text-left">Задача</td>
                        <td className="border border-white p-2 w-200 text-left">Дополнительная информация</td>
                        <td className="border border-white p-2 w-40 text-left">Дата создания</td>
                        <td className="border border-white p-2 w-48 text-left">Дата последнего изменения</td>
                        <td className="border border-white p-2 w-48 text-left">Дата примерного окончания</td>
                        <td className="border border-white p-2 w-32 text-left">Автор</td>
                      </tr>
                    </thead>
                    <tbody>
                        {dataArr.map((item, index) => (
                            <tr key={index} className="h-20 border-t-1 border-b-1 border-gray-300">
                                 <TabAllTask priority={prioritys ? prioritys.filter(priority => priority.id === String(item.priorityid)) : null} status={statuses ? statuses.filter(status => status.id === String(item.statusid)) : null} author={authors ? authors.filter(author => author.id === item.authorid) : null} data={item}/>
                            </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              );
}
