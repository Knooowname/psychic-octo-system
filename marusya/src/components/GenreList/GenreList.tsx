import { memo, useEffect, useState } from 'react'
import './GenreList.css'
import { getGenres } from '../../api/movies'
import { GenreCard } from '../../ui/GenreCard/GenreCard'
import { Link } from 'react-router'

interface newGenres {
    img: string,
    genre: string
}

export const GenreList = memo(() => {
    const [genres, setGenres] = useState<string[] | null>(null)
    const [isLoading, setIsLoading] = useState<boolean>(true)

    const newGenres: newGenres[] = []

    const pathToImg = [
        './src/assets/img-genre/history.jpg',
        './src/assets/img-genre/horror.jpg',
        './src/assets/img-genre/scifi.jpg',
        './src/assets/img-genre/stand-up.jpeg',
        './src/assets/img-genre/fantasy.jpg',
        './src/assets/img-genre/drama.jpg',
        './src/assets/img-genre/mystery.jpeg',
        './src/assets/img-genre/semeinoe.png',
        './src/assets/img-genre/comedy.jpg',
        './src/assets/img-genre/romance.jpg',
        './src/assets/img-genre/music.jpg',
        './src/assets/img-genre/crime.jpg',
        './src/assets/img-genre/tv-movie.jpg',
        './src/assets/img-genre/documentary.jpeg',
        './src/assets/img-genre/action.jpg',
        './src/assets/img-genre/triller.png',
        './src/assets/img-genre/western.jpg',
        './src/assets/img-genre/animation.jpg',
        './src/assets/img-genre/war.jpg',
        './src/assets/img-genre/prikl.png',
    ]

    useEffect(() => {
        getGenres()
            .then((data) => {
                setGenres(data)
                setIsLoading(false)
            })
            .catch((error) => {
                console.log(error)
                setIsLoading(false)
            })
    }, [])

    if (isLoading || !genres) {
        return <div>...Загрузка</div>
    }

    for (let i = 0; i < genres.length; i++) {
        const imgIndex = i % pathToImg.length
        newGenres.push({
            img: pathToImg[imgIndex],
            genre: genres[i],
        })
    }

    return (
        <div className='wrapper_genres_all'>
            <h1 className='genre_title'>
                Жанры фильмов
            </h1>
            <ul className='genres_list'>
                {newGenres.map((item, index) => (
                    <li key={index}>
                        <Link to={`/genres/${item.genre}`}>
                            <GenreCard genre={item.genre} image={pathToImg[index]} />
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
})