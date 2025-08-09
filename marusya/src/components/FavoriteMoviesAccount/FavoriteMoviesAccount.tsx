import { Top10MovieCard } from "../../ui/Top10MovieCard/Top10MovieCard"
import './FavoriteMoviesAccount.css'
import { useAppDispatch, useAppSelector } from "../../store/hooks/hooks"
import { useEffect } from "react"
import { fetchFavoritesUser, removeFavorites } from "../../store/slices/favoritesSlice"


export const FavoritesMoviesAccount = () => {
    
    const dispatch = useAppDispatch()
    const loading = useAppSelector(state => state.favorites.loading)
    const userFavorites = useAppSelector(state => state.favorites.favorites)

    useEffect(() => {
        dispatch(fetchFavoritesUser())
        console.log(userFavorites)
    }, [])

    if(loading) {
        return <div>...Загрузка</div>
    }

    const handleDeleteMovie = async (id: string) => {
        try {
            await dispatch(removeFavorites(id)).unwrap()
            await dispatch(fetchFavoritesUser())
            console.log(`Фильм с id: ${id} был удален`)
        } catch (error) {
            console.log('Ошибка при удалении фильма')
        }
    }
    
    return (
        <div>
            {!userFavorites || userFavorites.length === 0 ?
                <h2 className="no_favorites_title">Вы не добавили ни одного фильма</h2> 
                :
                <ul className="favorites_movies_list">
                    {userFavorites.map((item, index) => (
                        <li key={item.id}>
                            <Top10MovieCard count={index + 1} image={item.posterUrl} display={true} closeBtn={true} delMovie={() => handleDeleteMovie(item.id)}/>
                        </li>
                    ))}
                </ul>
            }
        </div>
    )
}