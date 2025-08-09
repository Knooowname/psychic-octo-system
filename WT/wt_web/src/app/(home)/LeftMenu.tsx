import Link from "next/link"
import LeftMenuBtn from "../../components/ui/LeftMenuBtn/LeftMenuBtn"
import { usePathname, useRouter } from "next/navigation"
import { useAuth } from "@/hooks/useAuth"

function LeftMenu() {

    const pathname = usePathname()
    const { logout } = useAuth()
    const router = useRouter()

    const handleLogoutClick = () => {
        console.log('logout')
        logout()

        router.push('/auth')
    }

    return (
        <div className="flex flex-col gap-[64px] pt-4 items-start justify-start border-r-1 border-r-gray-500 w-60 h-screen bg-[#243657]">
            <picture className="block pl-3">
                <img className="w-10 h-auto" src="./white-logo.png" />
            </picture>
            <ul className="flex flex-col items-start gap-[6px] w-full">
                <li className={`${pathname === '/' ? 'border-[#008888] bg-[linear-gradient(to_right,_rgba(0,136,136,0.2),_rgba(0,136,136,0))]' : 'border-transparent'} w-full flex items-center justify-start gap-[12px] pt-2 pb-2 pl-1 border-l-3 bg-transparent cursor-pointer hover:border-l-3 hover:border-[#008888] hover:bg-[linear-gradient(to_right,_rgba(0,136,136,0.2),_rgba(0,136,136,0))] transition-all duration-300`}>
                    <Link href={'/'} className="flex items-center gap-[12px]">
                        <LeftMenuBtn iconTag={'Отслеживание заданий'}>
                            <img className="block w-8 h-8" src={'./task.svg'} />
                        </LeftMenuBtn>
                    </Link>
                </li>
                <li className={`${pathname === '/author' ? 'border-[#008888] bg-[linear-gradient(to_right,_rgba(0,136,136,0.2),_rgba(0,136,136,0))]' : 'border-transparent'} w-full flex items-center justify-start gap-[12px] pt-2 pb-2 pl-1 border-l-3 bg-transparent cursor-pointer hover:border-l-3 hover:border-[#008888] hover:bg-[linear-gradient(to_right,_rgba(0,136,136,0.2),_rgba(0,136,136,0))] transition-all duration-300`}>
                    <Link href={'/author'} className="flex items-center gap-[12px]">
                        <LeftMenuBtn iconTag={'Добавить задание'}>
                            <img className="block w-8 h-8" src={'./plus.svg'} />
                        </LeftMenuBtn>
                    </Link>
                </li>
                <li className={`${pathname === '/about' ? 'border-[#008888] bg-[linear-gradient(to_right,_rgba(0,136,136,0.2),_rgba(0,136,136,0))]' : 'border-transparent'} w-full flex items-center justify-start gap-[12px] pt-2 pb-2 pl-1 border-l-3 bg-transparent cursor-pointer hover:border-l-3 hover:border-[#008888] hover:bg-[linear-gradient(to_right,_rgba(0,136,136,0.2),_rgba(0,136,136,0))] transition-all duration-300`}>
                    <Link href={'/about'} className="flex items-center gap-[12px]">
                        <LeftMenuBtn iconTag={'О программе'}>
                            <img className="block w-8 h-8" src={'./qu.svg'} />
                        </LeftMenuBtn>
                    </Link>
                </li>
                <li onClick={handleLogoutClick} className="w-full flex items-center justify-start gap-[12px] pt-2 pb-2 pl-1 border-l-3 border-transparent bg-transparent cursor-pointer hover:border-l-3 hover:border-[#008888] hover:bg-[linear-gradient(to_right,_rgba(0,136,136,0.2),_rgba(0,136,136,0))] transition-all duration-300">
                    <LeftMenuBtn iconTag={'Выход'}>
                        <img className="block w-8 h-8" src={'./logout.svg'} />
                    </LeftMenuBtn>
                </li>
            </ul>
        </div>
    )
}

export default LeftMenu