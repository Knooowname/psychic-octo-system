import { RandomMovie } from "../../components/RandomMovie/RandomMovie"
import { Top10MovieList } from "../../components/Top10MovieList/Top10MovieList"
import { useWindowWidth } from "../../hooks/useWindowWidth"
import { MobileRandomMovie } from "../../mobile/components/MobileRandomMovie/MobileRandomMovie"
import { MobileTop10MovieList } from "../../mobile/components/MobileTop10MovieList/MobileTop10MovieLsit"


export const HomePage = () => {
    
    const width = useWindowWidth()
    
    return (
        <>
            {width <= 450 ?
                <>
                <MobileRandomMovie/>
                <MobileTop10MovieList/>
                </>
                :
                <>
                <RandomMovie/>
                <Top10MovieList/>
                </>
            }
        </>
    )
}