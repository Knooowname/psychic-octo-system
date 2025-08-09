import './Header.css'
import { NavItem } from '../../ui/NavItem/NavItem'
import { Link, useLocation } from 'react-router'
import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks'
import { openModal } from '../../store/slices/modalSlice'
import { useEffect, useState } from 'react'
import { MovieSchema } from '../../api/MovieSchema'
import { SearchMovieCard } from '../../ui/SearchMovieCard/SearchMovieCard'
import { getMoviesTitle } from '../../api/movies'

export const Header = () => {

    const dispatch = useAppDispatch()
    const user = useAppSelector(state => state.user.user)
    const [searchValue, setSearchValue] = useState<string>('')
    const [allMovie, setAllMovie] = useState<MovieSchema[] | null>(null)
    const [isLoading, setIsLoading] = useState<boolean>(true)

    const location = useLocation()

    useEffect(() => {
        getMoviesTitle(searchValue)
            .then((data) => {
                setAllMovie(data)
                setIsLoading(false)
            })
            .catch((error) => {
                console.log(error)
                setIsLoading(false)
            })
    }, [searchValue])

    if(isLoading || !allMovie) {
        return <div>...Загрузка</div>
    }

    const resetSearchValue = () => {
        setSearchValue('')
    }

    return (
        <div className='header'>
            <picture className='header_picture'>
                <img className="header_logo" src="/marusya-white.png" alt="Логотип VK Маруся" />
            </picture>
            <ul className='header_list'>
                <Link to={'/'} className={`header_item ${location.pathname === '/' ? 'active_header_item' : ''}`}>
                    <NavItem title={'Главная'}/>
                </Link>
                <Link to={'/genres'} className={`header_item ${location.pathname === '/genres' ? 'active_header_item' : ''}`}>
                    <NavItem title={'Жанры'}/>
                </Link>
            </ul>
            <div className='wrapper__relative'>
                <input className='header_input_search' type="search" placeholder='Поиск' value={searchValue} onChange={(e) => setSearchValue(e.target.value)}/>
                {searchValue ? 
                    <div className='wrapper__search__cards'>
                        <ul className='searched_list_movies'>
                            {allMovie.map((item, index) => (
                                index <= 4 ? 
                                <Link to={`/movie/${item.id}`} className='searched_item_link' onClick={resetSearchValue}>
                                   <SearchMovieCard props={item}/> 
                                </Link>
                                : null
                            ))}
                        </ul>
                    </div>
                    :
                    null
                }
            </div>
            {!user 
            ? <button className='btn-auth' onClick={() => dispatch(openModal('auth'))}>
                Войти
            </button>
            : <Link to={'/account'} className={`user_account ${location.pathname === '/account' ? 'active_header_item' : ''}`}>{user.name}</Link>
            }
        </div>
    )
}