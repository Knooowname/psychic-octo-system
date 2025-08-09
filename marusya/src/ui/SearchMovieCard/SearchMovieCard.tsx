import { FC } from 'react'
import { MovieSchema } from '../../api/MovieSchema'
import { Raiting } from '../Raiting/Raiting'
import './SearchMovieCard.css'

interface SearchMovieCardProps {
    props: MovieSchema | null,
}

export const SearchMovieCard: FC<SearchMovieCardProps> = ({props}) => {

    if(!props) {
        return <div>...Данные не найдены</div>
    }

    return (
        <li className='search_card_item'>
            {props.posterUrl ? 
            <picture className='pic_img_card_sr'>
                <img src={props.posterUrl} className='search_card_img'/>
            </picture>
            :
            <div className='wrapper_no_img_poster'>
                <span className='no_img_poster_text'>No Image</span>
            </div>
            }
            <div className='wrapper_card_info'>
                <div className="info_movie">
                    <Raiting raiting={Number(props.tmdbRating.toFixed(1))} size={'small'}/>
                    <p className='card_info_descr'>{props.releaseYear}</p>
                    <p className='card_info_descr'>{props.genres[0]}</p>
                    <p className='card_info_descr'>{props.runtime >= 60
                ? `${Math.floor(props.runtime / 60)} hour` +
                ` ${props.runtime % 60} minutes`
                : props.runtime}</p>
                </div>
                <h4 className='card_info_title'>{props.title}</h4>
            </div>
        </li>
    )
}