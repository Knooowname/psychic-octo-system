import { useAppSelector } from "../../store/hooks/hooks"
import ReactDOM from 'react-dom';
import { TrailerMovie } from "../ModalTrailerMovie/TrailerMovie";
import { useParams } from "react-router";

export const TrailerModal = () => {
    const { isOpen } = useAppSelector((state) => state.modal)
    if(!isOpen) {
        return null
    }

    const { trailerYouTubeId } = useParams()

    return ReactDOM.createPortal(
        <>
            <TrailerMovie src={trailerYouTubeId}/>
        </>,
        document.body
    )
}