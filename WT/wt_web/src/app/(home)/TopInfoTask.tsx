import { Button } from "../../components/ui/Button/Button";
import { InputTaskInfo } from "../../components/ui/InputTaskInfo/InputTaskInfo";


export function TopInfoTask() {
  
  const options = [
    'Задача назначена',
    'Задача принята исполнителем',
    'Задача в работе',
    'Задача завершена',
    'Задача отменена',
    'Задача изменена',
  ]

  return (
    <div className="w-full bg-[#F5F7FB]">
      <div className="flex gap-[20px] flex-wrap p-4 pl-6 w-300 items-end">
        <InputTaskInfo type="text" placeholder="Выбранная задача" label="Выбранная задача" disabled={true}/>
        <InputTaskInfo type="date" placeholder="Дата создания задачи" label="Дата создания задачи" disabled={true}/>
        <InputTaskInfo type="date" placeholder="Дата примерного окончания" label="Дата примерного окончания" disabled={true}/>
        <InputTaskInfo type="date" placeholder="Дата окончания задачи" label="Дата окончания задачи" disabled={true}/>
        <InputTaskInfo type="text" placeholder="Автор постановки задачи" label="Автор постановки задачи" disabled={true}/>
        <InputTaskInfo type="text" placeholder="Исполнитель задачи" label="Исполнитель задачи" disabled={true}/>
        <label className="flex flex-col gap-[4px]">
            <span className="font-light text-sm text-gray-400">Статус задачи</span>
            <select className="bg-white w-60 h-10 rounded text-sm text-black-300 font-normal">
                {options.map((item, index) => (
                    <option key={index} value={item}>
                        {item}
                    </option>
                ))}
            </select>
        </label>
        <Button classname="font-medium bg-blue-500 w-45 h-10 rounded flex justify-center items-center text-white cursor-pointer hover:bg-blue-700 hover:shadow-lg transition duration-300 ease-in-out" type="submit">Изменить статус</Button>
      </div>
    </div>
  )
}
