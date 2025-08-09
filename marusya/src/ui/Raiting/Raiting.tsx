import { FC } from 'react'
import './Raiting.css'

export interface RaitingProps {
    raiting: number,
    size?: 'small' | 'large',
    variant?: 'bullshit' | 'poor' | 'good' | 'excellent',
}

export const Raiting: FC<RaitingProps> = ({raiting, size, variant}) => {
    
    return (
        <div className='raiting_wrapper' data-variant={raiting > 8 ? variant = 'excellent' : raiting > 7 ? variant = 'good' : raiting > 6 ? variant = 'poor' : variant = 'bullshit'} data-size={size}>
            <img className='raiting__img' src="./src/assets/icons/star.svg" alt="raiting movie" data-size={size}/>
            <span className='raiting' data-size={size}>{raiting}</span>
        </div>
    )
}