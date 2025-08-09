export function AboutProgramm() {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center gap-[20px] bg-[#F5F7FB]">
            <picture className="block h-23 w-20">
                <img className="h-full w-full" src="./logo.png"/>
            </picture>
            <p className="font-medium text-lg m-0">Название программного обеспечения: Произведение искусства</p>
            <p className="font-medium text-lg m-0">Версия программного обеспечения: Последняя, больше не будет</p>
            <p className="font-medium text-lg m-0">Разработчики: Данько А.П., Летовальцева М.И.</p>
            <p className="font-medium text-lg m-0">По вопросам и предложениям: В городской суд</p>
        </div>
    )
}
