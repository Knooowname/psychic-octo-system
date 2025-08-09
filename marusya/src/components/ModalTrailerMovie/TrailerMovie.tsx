import { FC } from 'react'
import './TrailerMovie.css'
import { useAppDispatch } from '../../store/hooks/hooks'
import { closeModal } from '../../store/slices/modalSlice'
import { useNavigate } from 'react-router'
import { useModalCloseWithEscape } from '../../hooks/useModalCloseWithEscape'
import YouTube, { YouTubeProps } from 'react-youtube'

interface TrailerMovieProps {
    src?: string
}

export const TrailerMovie: FC<TrailerMovieProps> = ({ src }) => {

    const dispatch = useAppDispatch()
    const nav = useNavigate()
    useModalCloseWithEscape('trailer')

    const onPlayerReady: YouTubeProps ['onReady'] = (event) => {
        event.target.pauseVideo();
    }

    const opts = {
        height: '100%',
        width: '100%',
        playerVars : { autoplay : 1 },
    }

    return (
        <div className='wrapper_modal_video'>
            <div className='wrapper_video'>
                <button className='close_trailer' onClick={() => {
                    dispatch(closeModal('trailer'))
                    nav(-1)
                }}></button>
                <YouTube videoId={src} opts={opts} onReady={onPlayerReady}/>
            </div>
        </div>
    )
}