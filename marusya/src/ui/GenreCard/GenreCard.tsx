import { FC } from 'react'
import './GenreCard.css'

export interface GenreCardProps {
    image: string,
    genre: string,
}

export const GenreCard: FC<GenreCardProps> = ({image, genre}) => {
    return (
        <button className='genre_wrapper_all_card'>
            <div className="genre_card_img">
                <picture className='genre_pic_img'>
                    <img className='genre_img' src={image} alt={genre} />
                </picture>
            </div>
            <div className="genre_card">
                <p className='genre_card_descr'>
                    {genre.charAt(0).toUpperCase() + genre.slice(1).toLowerCase()}
                </p>
            </div>
        </button>
    )
}