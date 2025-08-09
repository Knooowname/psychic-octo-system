import { FC } from 'react'
import { Raiting } from '../../ui/Raiting/Raiting'
import './CurrentMovie.css'
import { getMovieById } from '../../api/movies'
import { Button } from '../../ui/Button/Button'
import { DescriptionMovie } from '../../ui/DescriptionMovie/DescriptionMovie'
import { useQuery } from '@tanstack/react-query'
import queryClient from '../../api/queryClient'
import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks'
import { openModal } from '../../store/slices/modalSlice'
import { setFavorites } from '../../store/slices/favoritesSlice'
import { Link } from 'react-router'

export interface CurrentMovieProps {
    id: string,
}

export const CurrentMovie: FC<CurrentMovieProps> = ({id}) => {

    const dispatch = useAppDispatch()
    const userIsAuth = useAppSelector(state => state.user.user)

    const {data, isLoading} = useQuery({
        queryFn: () => getMovieById(id),
        queryKey: ['movies']
    }, queryClient)

    if (isLoading || !data) {
        return <div>...Загрузка</div>
    }

    const handleAddToFavorites = async () => {
        if (!userIsAuth) {
          dispatch(openModal('register'))
          return 
        }
    
        try {
          const resultAction = await dispatch(setFavorites(data.id.toString()))
          if(setFavorites.fulfilled.match(resultAction)) {
            console.log('Фильм добавлен в избранное')
          } else {
            console.error('Ошибка при добавлении в избранное', resultAction.payload)
          }
        } catch (error) {
          console.error(error)
        }
      }

    return (
        <div className='wrapper_all'>
            <div className="random_movie_wrapper">
                <div className="wrapper_all_info_left">
                    <div className="wrapper_all_info">
                        <div className="wrapper_movie_info">
                            <Raiting
                                raiting={Number(data.tmdbRating.toFixed(1))}
                                size="large"
                            />
                            <span className="span_all ">{data.releaseYear}</span>
                            <span className="span_all ">{data.genres[0]}</span>
                            <span className="span_all ">
                                {data.runtime >= 60
                                    ? `${Math.floor(data.runtime / 60)} hour` +
                                    ` ${data.runtime % 60} minutes`
                                    : data.runtime}
                            </span>
                        </div>
                        <h1 className="random_movie_title">{data.title}</h1>
                        <p className="movie_descr">{data.plot}</p>
                    </div>
                    <div className="wrapper_btns">
                        <Link to={`/${data.trailerYouTubeId}`}>
                            <Button children={"Трейлер"} disabled={false} variant="primary" onClick={() => dispatch(openModal('trailer'))}/>
                        </Link>
                        <Button disabled={false} variant="icon" onClick={handleAddToFavorites}>
                            <svg width="20" height="19" viewBox="0 0 20 19" fill="none">
                                <path
                                    d="M14.5 0C17.5376 0 20 2.5 20 6C20 13 12.5 17 10 18.5C7.5 17 0 13 0 6C0 2.5 2.5 0 5.5 0C7.35997 0 9 1 10 2C11 1 12.64 0 14.5 0ZM10.9339 15.6038C11.8155 15.0485 12.61 14.4955 13.3549 13.9029C16.3337 11.533 18 8.9435 18 6C18 3.64076 16.463 2 14.5 2C13.4241 2 12.2593 2.56911 11.4142 3.41421L10 4.82843L8.5858 3.41421C7.74068 2.56911 6.5759 2 5.5 2C3.55906 2 2 3.6565 2 6C2 8.9435 3.66627 11.533 6.64514 13.9029C7.39 14.4955 8.1845 15.0485 9.0661 15.6038C9.3646 15.7919 9.6611 15.9729 10 16.1752C10.3389 15.9729 10.6354 15.7919 10.9339 15.6038Z"
                                    fill="white"
                                />
                            </svg>
                        </Button>
                    </div>
                </div>
                <div className="wrapper_img_right">
                    <picture className="right_pic">
                        <img className="pic_img" src={data.posterUrl} alt="Poster Image" />
                    </picture>
                </div>
            </div>
            <div className='wrapper_description'>
                <h2 className='description_title'>
                    О фильме
                </h2>
                <div className="wrapper_descr_movie">
                    <DescriptionMovie text={'Язык оригинала'} meaning={data.language}/>
                    <DescriptionMovie text={'Бюджет'} meaning={data.budget}/>
                    <DescriptionMovie text={'Выручка'} meaning={data.revenue}/>
                    <DescriptionMovie text={'Режиссер'} meaning={data.director}/>
                    <DescriptionMovie text={'Продакшен'} meaning={data.production}/>
                    <DescriptionMovie text={'Награды'} meaning={data.awardsSummary}/>
                </div>
            </div>
        </div>
    )
}