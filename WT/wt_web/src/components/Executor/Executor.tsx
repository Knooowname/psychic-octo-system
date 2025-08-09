'use client'

import { TopInfoTask } from "@/app/(home)/TopInfoTask"
import { Button } from "../ui/Button/Button"
import { TasksInProcess } from "../TasksInProcess/TasksInProcess"
import { useEffect, useState } from "react"
import { fetchConfig } from "@/api/fetchConfig"
import { api } from "@/pages/api/api"
import { useAppSelector } from "@/hooks/useAppSelector"
import { APICOMMAND } from "@/shared/types/command.types"
import { CompletedTasks } from "../CompletedTasks/CompletedTasks"
import { CanceledTasks } from "../CanceledTasks/CanceledTasks"
import { AllTasks } from "../AllTasks/AllTasks"
import { Task } from "@/shared/types/task.types"

export function Executor() {

  const [stateTabs, setStateTabs] = useState<'process' | 'completed' | 'cancel' | 'all'>('process')
  const [tasks, setTasks] = useState([])
  

  const test = localStorage.getItem('user');
  if(!test) {
    return 
  }
  const test1 = JSON.parse(test);
  //const test = JSON.parse(localStorage.getItem('user')?localStorage.getItem('user')) 
  //const user = useAppSelector((state) => state.user.user)
  const user = test1;
  console.log(user)

  useEffect(() => {
    const fetchTasksExecutor = async () => {
      const config = await fetchConfig()
      const response = await api(APICOMMAND.GETEXECUTORTASK, { 'id': `${user?.id}` }, config)
      const data = await response?.json()
      setTasks(data.data)
      console.log(data.data)
    }
    fetchTasksExecutor()
  }, [])


  const filteredProcessTasks = tasks?.filter((item: Task) => String(item.statusid) === "3" || String(item.statusid) === '1' || String(item.statusid) === '2')
  const filteredCompletedTasks = tasks?.filter((item: Task) => String(item.statusid) === "4")
  const filteredCancelTasks = tasks?.filter((item: Task) => String(item.statusid) === "5")

  return (
    <div className="flex flex-col items-start w-screen">
      <div className="w-full">
        <TopInfoTask />
      </div>
      <div className="flex justify-between gap-[0px] w-260 mb-4">
        <Button onClick={() => setStateTabs('process')} classname={`${stateTabs === 'process' ? 'border-l-3 border-[#2B7FFF] bg-[linear-gradient(to_right,_rgba(43,127,255,0.4),_rgba(43,127,255,0.2))]' : ''} font-medium w-full h-15 flex justify-center items-center text-white cursor-pointer ease-in-out border-l-3 hover:border-l-3 hover:border-[#2B7FFF] hover:bg-[linear-gradient(to_right,_rgba(43,127,255,0.4),_rgba(43,127,255,0.2))]`}>
          <span className="text-gray-700">Задача в процессе</span>
        </Button>
        <Button onClick={() => setStateTabs('completed')} classname={`${stateTabs === 'completed' ? 'border-l-3 border-[#2B7FFF] bg-[linear-gradient(to_right,_rgba(43,127,255,0.4),_rgba(43,127,255,0.2))]' : ''} font-medium w-full h-15 flex justify-center items-center text-white cursor-pointer ease-in-out border-l-3 hover:border-l-3 hover:border-[#2B7FFF] hover:bg-[linear-gradient(to_right,_rgba(43,127,255,0.4),_rgba(43,127,255,0.2))]`}>
          <span className="text-gray-700">Завершенные задачи</span>
        </Button>
        <Button onClick={() => setStateTabs('cancel')} classname={`${stateTabs === 'cancel' ? 'border-l-3 border-[#2B7FFF] bg-[linear-gradient(to_right,_rgba(43,127,255,0.4),_rgba(43,127,255,0.2))]' : ''} font-medium w-full h-15 flex justify-center items-center text-white cursor-pointer ease-in-out border-l-3 hover:border-l-3 hover:border-[#2B7FFF] hover:bg-[linear-gradient(to_right,_rgba(43,127,255,0.4),_rgba(43,127,255,0.2))]`}>
          <span className="text-gray-700">Отменённые задачи</span>
        </Button>
        <Button onClick={() => setStateTabs('all')} classname={`${stateTabs === 'all' ? 'border-l-3 border-[#2B7FFF] bg-[linear-gradient(to_right,_rgba(43,127,255,0.4),_rgba(43,127,255,0.2))]' : ''} font-medium w-full h-15 flex justify-center items-center text-white cursor-pointer ease-in-out border-l-3 hover:border-l-3 hover:border-[#2B7FFF] hover:bg-[linear-gradient(to_right,_rgba(43,127,255,0.4),_rgba(43,127,255,0.2))]`}>
          <span className="text-gray-700">Все задачи</span>
        </Button>
      </div>
      <div className="w-full h-full overflow-x-auto overflow-y-auto">
        {stateTabs === 'process' ? <TasksInProcess dataArr={filteredProcessTasks !== null ? filteredProcessTasks : []} /> : stateTabs === 'completed' ? <CompletedTasks dataArr={filteredCompletedTasks !== null ? filteredCompletedTasks : []} /> : stateTabs === 'cancel' ? <CanceledTasks dataArr={filteredCancelTasks !== null ? filteredCancelTasks : []} /> : stateTabs === 'all' ? <AllTasks dataArr={tasks !== null ? tasks : []} /> : <p></p>}
      </div>
    </div>
  )
}
