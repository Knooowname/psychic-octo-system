import { FC } from 'react'
import './DescriptionMovie.css'

export interface DescriptionMovieProps {
    text: string, 
    meaning: string | null
}

export const DescriptionMovie: FC<DescriptionMovieProps> = ({text, meaning}) => {
    return (
        <div className='wrapper_meaning'>
            <div className='wrapper_text_and_line'>
                <p className='text_meaning'>
                    {text}
                </p>
            <div className='line'></div>
            </div>
            {meaning ? 
                <p className='text_meaning'>
                    {text === 'Бюджет' ? `${meaning} $` : meaning}
                </p>
                :
                <p className='no-info'>
                    Нет информации
                </p>    
            }
        </div>
    )
}