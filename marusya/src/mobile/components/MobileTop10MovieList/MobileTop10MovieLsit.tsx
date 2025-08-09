import { getTop10Movies } from '../../../api/movies'
import { MovieSchema } from '../../../api/MovieSchema'
import { useGetData } from '../../../hooks/useGetData'
import { Top10MovieCard } from '../../../ui/Top10MovieCard/Top10MovieCard'
import './MobileTop10MovieList.css'

export const MobileTop10MovieList = () => {
    
    const {data, loading} = useGetData<MovieSchema[]>(getTop10Movies)
    
    if(!data || loading) {
        return <div>...Загрузка</div>
    }

    return (
        <>
            <h2 className='mobile_top_10_movies_title'>
                Топ 10 фильмов
            </h2>
            <div className='mobile_top_10_movies_slider'>
                <ul className='mobile_top_10_movies_slider-track'>
                    {data.map((item, index) => (
                        <li key={item.id}>
                            <Top10MovieCard count={index + 1} image={item.posterUrl} display={false} closeBtn={false}/>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}