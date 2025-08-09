'use client'

import { fetchConfig } from "@/api/fetchConfig"
import { APICOMMAND } from "@/shared/types/command.types"
import { Task } from "@/shared/types/task.types"
import { useEffect, useState } from "react"
import { TopInfoTaskAuthor } from "../TopInfoTaskAuthor/TopInfoTaskAuthor"
import { Button } from "../ui/Button/Button"
import { AuthorTasksInProcess } from "./AuthorTasksInProcess/AuthorTasksInProcess"
import { api } from "@/pages/api/api"
import { useAppSelector } from "@/hooks/useAppSelector"
import { AuthorComletedTasks } from "./AuthorComletedTasks/AuthorComletedTasks"
import { AuthorAllTasks } from "./AuthorAllTasks/AuthorAllTasks"


export function Author() {
    const [stateTabs, setStateTabs] = useState<'process' | 'completed' | 'cancel' | 'all'>('process')
    const [tasksAuthor, setTasksAuthor] = useState<Task[] | null>(null)
    // const user = useAppSelector(state => state.user.user)

    const userLS = localStorage.getItem('user')

    if (!userLS) {
        return
    }

    const user = JSON.parse(userLS)

    useEffect(() => {
        const fetchTasksAuthor = async () => {
            const config = await fetchConfig()
            const response = await api(APICOMMAND.GETAUTHORTASK, { 'id': `${user?.id}` }, config)
            const data = await response?.json()
            setTasksAuthor(data.data)
        }
        fetchTasksAuthor()
    }, [])

    const filteredProcessTasks = tasksAuthor?.filter((item: Task) => String(item.statusid) === "3" || String(item.statusid) === '1' || String(item.statusid) === '2')
    const filteredCompletedTasks = tasksAuthor?.filter((item: Task) => String(item.statusid) === "4")
    const filteredCancelTasks = tasksAuthor?.filter((item: Task) => String(item.statusid) === "5")

    return (
        <div className="flex flex-col items-start w-screen">
            <div className="w-full">
                <TopInfoTaskAuthor />
            </div>
            <div className="flex justify-between gap-[0px] w-260 mb-4">
                <Button onClick={() => setStateTabs('process')} classname={`${stateTabs === 'process' ? 'border-l-3 border-[#2B7FFF] bg-[linear-gradient(to_right,_rgba(43,127,255,0.4),_rgba(43,127,255,0.2))]' : ''} font-medium w-full h-15 flex justify-center items-center text-white cursor-pointer ease-in-out`}>
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
            <div className="w-full overflow-x-auto overflow-y-auto p-0 m-0 box-border" >
                {stateTabs === 'process' ? <AuthorTasksInProcess data={filteredProcessTasks ? filteredProcessTasks : []} /> : stateTabs === 'completed' ? <AuthorComletedTasks data={filteredCompletedTasks ? filteredCompletedTasks : []} /> : stateTabs === 'cancel' ? <AuthorComletedTasks data={filteredCancelTasks ? filteredCancelTasks : []} /> : stateTabs === 'all' ? <AuthorAllTasks data={tasksAuthor ? tasksAuthor : []} /> : null}
            </div>
        </div>
    )
}



