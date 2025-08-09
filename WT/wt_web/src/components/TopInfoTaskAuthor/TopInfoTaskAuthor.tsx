'use client'

import React, { memo, useEffect, useState } from "react"
import { Button } from "../ui/Button/Button"
import { InputTaskInfo } from "../ui/InputTaskInfo/InputTaskInfo"
import { Select } from "../ui/Select/Select"
import { User } from "@/shared/types/user.types"
import { fetchConfig } from "@/api/fetchConfig"
import { api } from "@/pages/api/api"
import { APICOMMAND } from "@/shared/types/command.types"
import { Priority } from "@/shared/types/priority.types"
import { Status } from "@/shared/types/status.types"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { FormInput } from "../ui/FormInput/FormInput"
import { useAppSelector } from "@/hooks/useAppSelector"

export const fetchTaskSchema = z.object({
    nametask: z.string(),
    datecreate: z.string(),
    datechange: z.any(),
    dateestimatedcompletion: z.string(),
    dateend: z.any(),
    document: z.any(),
    authorid: z.string(),
    executorid: z.any(),
    statusid: z.any(),
    priorityid: z.any(),
    info: z.string(),
})

export type FetchTask = z.infer<typeof fetchTaskSchema>

export const TopInfoTaskAuthor = memo(function TopInfoTaskAuthor() {

    const [users, setUsers] = useState<User[] | null>(null)
    const [prioritys, setPrioritys] = useState<Priority[] | null>(null)
    const [status, setStatus] = useState<Status[] | null>(null)
    const [base64Data, setBase64Data] = useState<string | null>(null)
    const userLS = localStorage.getItem('user')
    
    if(!userLS) {
        return
    }
    
    const user = JSON.parse(userLS)

    const { handleSubmit, register, formState:{errors}, setValue } = useForm<FetchTask>({ 
        resolver: zodResolver(fetchTaskSchema),
        defaultValues: {
            document: null,
            datechange: null,
        } 
    })
    
    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if(!file) {
            setValue('document', null)
            setBase64Data(null)
            return
        }

        const reader = new FileReader()
        reader.onloadend = () => {
            const base64string = reader.result?.toString()?.split(',')[1] || ''
            setValue('document', base64string)
            setBase64Data(base64string)
        }

        reader.readAsDataURL(file)
    }

    useEffect(() => {
        const fetchUsers = async () => {
            const config = await fetchConfig()
            const responseUsers = await api(APICOMMAND.GETUSERS, {}, config)
            const data = await responseUsers?.json()
            setUsers(data.data)
            const response = await api(APICOMMAND.GETPRIORITY, {}, config)
            const dataPriority = await response?.json()
            setPrioritys(dataPriority.data)
            const responseStatus = await api(APICOMMAND.GETSTATUS, {}, config)
            const dataStatus = await responseStatus?.json()
            setStatus(dataStatus.data)
        }
        fetchUsers()
    }, [])

    useEffect(() => {
        register('document')
    }, [register])

    const handleSubmitAuthor = async (data: FetchTask) => {
        console.log("click")

        const preparedData: FetchTask = {
            ...data,
            datecreate: `${data.datecreate} 00:00:00`,
            datechange: null,
            dateestimatedcompletion: `${data.dateestimatedcompletion} 00:00:00`,
            dateend: null,
        }

        console.log(preparedData)

        try {
            const config = await fetchConfig()
            const response = await api(APICOMMAND.ADDTASK, preparedData, config)
            const dataResp = await response?.json()
            console.log(dataResp)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div className="w-full bg-[#F5F7FB]">
            <form onSubmit={handleSubmit(handleSubmitAuthor)} className="flex gap-[20px] flex-wrap p-4 pl-6 w-320 items-end" >
                <FormInput type="text" placeholder="Название задачи" label="Название задачи" {...register('nametask')} errorMessage={errors.nametask?.message}/>
                <FormInput type="date" placeholder="Дата создания задачи" label="Дата создания задачи" {...register('datecreate')} errorMessage={errors.datecreate?.message}/>
                <FormInput type="date" placeholder="Дата примерного окончания задачи" label="Дата примерного окончания задачи" {...register('dateestimatedcompletion')} />
                <FormInput type="file" placeholder="Прикрепить файл" label="Прикрепить файл" accept=".zip" onChange={handleFileChange}/>
                <FormInput type="text" placeholder={`${user?.firstname} ${user?.lastname}`} label="Автор постановки задачи" value={`${user?.firstname} ${user?.lastname}`} />
                <input type="hidden" value={user.id} {...register('authorid')}/>
                {/* <Select label={'Исполнитель'} options={users ? users : []} {...register('executorid')} /> */}
                <label className="flex flex-col gap-[4px]">
                    <span className="font-light text-sm text-gray-400">Исполнитель</span>
                    <select className="bg-white w-60 h-10 rounded text-sm text-black-300 font-normal pl-1" {...register('executorid')}>
                    {users?.map(item => (
                        <option key={item.id} value={item.id}>
                            {item.firstname + ' ' + item.lastname}
                        </option>
                    ))}
                </select>
                </label>
                <label className="flex flex-col gap-[4px]">
                    <span className="font-light text-sm text-gray-400">Статус</span>
                    <select className="bg-white w-60 h-10 rounded text-sm text-black-300 font-normal pl-1" {...register('statusid')}>
                    {status?.map(item => (
                        <option key={item.id} value={item.id}>
                            {item.namestatus}
                        </option>
                    ))}
                </select>
                </label>
                {/* <Select label={'Статус'} options={status ? status : []} {...register('statusid')} /> */}
                <Button classname="font-medium bg-blue-500 w-52 h-10 rounded flex justify-center items-center text-white cursor-pointer hover:bg-blue-700 hover:shadow-lg transition duration-300 ease-in-out" type="submit" >Добавить задачу</Button>
                <Button classname="font-medium bg-blue-500 w-45 h-10 rounded flex justify-center items-center text-white cursor-pointer hover:bg-blue-700 hover:shadow-lg transition duration-300 ease-in-out" disabled={true} type="button">Повторить задачу</Button>
                <FormInput type="text" placeholder="Дополнительная информация" label="Дополнительная информация" {...register('info')}   />
                {/* <Select label={'Приоритет'} options={prioritys ? prioritys : []} {...register('priorityid')} /> */}
                <label className="flex flex-col gap-[4px]">
                    <span className="font-light text-sm text-gray-400">Приоритет</span>
                    <select className="bg-white w-60 h-10 rounded text-sm text-black-300 font-normal pl-1" {...register('priorityid')}>
                    {prioritys?.map(item => (
                        <option key={item.id} value={item.id}>
                            {item.namepriority}
                        </option>
                    ))}
                </select>
                </label>
                <Button classname="font-medium bg-blue-500 w-50 h-10 rounded flex justify-center items-center text-white cursor-pointer hover:bg-blue-700 hover:shadow-lg transition duration-300 ease-in-out" disabled={true} type="button">Изменить приоритет</Button>
                <Button classname="font-medium bg-blue-500 w-45 h-10 rounded flex justify-center items-center text-white cursor-pointer hover:bg-blue-700 hover:shadow-lg transition duration-300 ease-in-out" disabled={true} type="button">Изменить задачу</Button>
            </form>
        </div>
    )
})

