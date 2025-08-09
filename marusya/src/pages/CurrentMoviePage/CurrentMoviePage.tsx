import { useParams } from "react-router"
import { CurrentMovie } from "../../components/CurrentMovie/CurrentMovie"
import { getMovieById } from "../../api/movies"
import { useQuery } from "@tanstack/react-query"
import queryClient from "../../api/queryClient"


export const CurrentMoviePage = () => {

    const { movieId } = useParams()

    if(!movieId) {
        return 
    }

    const { data, isLoading} = useQuery({
        queryKey: ['movies', movieId],
        queryFn: () => getMovieById(movieId),
    }, queryClient)

    if(isLoading || !data) {
        return <div>...Загрузка</div>
    }

    const movie = data

    if(!movie) {
        return <div>Фильм не найден!</div>
    }
    


    return (
        <>
            <CurrentMovie id={movie.id}/>
        </>
    )
}