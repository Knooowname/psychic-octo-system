import "./RandomMovie.css";
import { useEffect, useRef, useState } from "react";
import { getRandomMovie } from "../../api/movies";
import { MovieSchema } from "../../api/MovieSchema";
import { Button } from "../../ui/Button/Button";
import { Raiting } from "../../ui/Raiting/Raiting";
import { Link } from "react-router";
import { useAppDispatch, useAppSelector } from "../../store/hooks/hooks";
import { openModal } from '../../store/slices/modalSlice'
import { fetchFavoritesUser, setFavorites } from "../../store/slices/favoritesSlice";

export const RandomMovie = () => {

  const dispatch = useAppDispatch()
  const userIsAuth = useAppSelector(state => state.user.user)
  const userFavorites = useAppSelector(state => state.favorites.favorites)

  const [ranMovie, setRanMovie] = useState<MovieSchema | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const hasFetched = useRef(false);

  useEffect(() => {
    dispatch(fetchFavoritesUser())
  }, [])

  useEffect(() => {
    if (hasFetched.current) return;
    hasFetched.current = true;

    getRandomMovie()
      .then((data) => {
        setRanMovie(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });

  }, []);

  if (isLoading || !ranMovie) {
    return <div>Загрузка фильма...</div>;
  }

  const handleReloadRandomMovie = () => {
    getRandomMovie()
      .then((data) => {
        setRanMovie(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }

  const handleAddToFavorites = async () => {
    if (!userIsAuth) {
      dispatch(openModal('auth'))
      return
    }

    try {
      const resultAction = await dispatch(setFavorites(ranMovie.id.toString()))
      await dispatch(fetchFavoritesUser()).unwrap()
      if (setFavorites.fulfilled.match(resultAction)) {
        console.log('Фильм добавлен в избранное')
        console.log(userFavorites)
      } else {
        console.error('Ошибка при добавлении в избранное', resultAction.payload)
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="random_movie_wrapper">
      <div className="wrapper_all_info_left">
        <div className="wrapper_all_info">
          <div className="wrapper_movie_info">
            <Raiting
              raiting={Number(ranMovie.tmdbRating.toFixed(1))}
              size={'large'}
            />
            <span className="span_all ">{ranMovie.releaseYear}</span>
            <span className="span_all ">{ranMovie.genres[0]}</span>
            <span className="span_all ">
              {ranMovie.runtime >= 60
                ? `${Math.floor(ranMovie.runtime / 60)} hour` +
                ` ${ranMovie.runtime % 60} minutes`
                : ranMovie.runtime}
            </span>
          </div>
          <h1 className="random_movie_title">{ranMovie.title}</h1>
          <p className="movie_descr">{ranMovie.plot}</p>
        </div>
        <div className="wrapper_btns">
          {/* Тут под большим вопросом крч путь до трейлера */}
          <Link to={`/${ranMovie.trailerYouTubeId}`}>
            <Button children={"Трейлер"} disabled={false} variant="primary" width={window.innerWidth <= 500 ? '335' : undefined} onClick={() => dispatch(openModal('trailer'))} />
          </Link>
          <Link to={`/movie/${ranMovie.id}`}>
            <Button children={"О фильме"} disabled={false} variant="secondary" />
          </Link>
          <Button disabled={false} variant="icon" onClick={handleAddToFavorites}>
            <svg width="20" height="19" viewBox="0 0 20 19" fill="white">
              <path
                d="M14.5 0C17.5376 0 20 2.5 20 6C20 13 12.5 17 10 18.5C7.5 17 0 13 0 6C0 2.5 2.5 0 5.5 0C7.35997 0 9 1 10 2C11 1 12.64 0 14.5 0ZM10.9339 15.6038C11.8155 15.0485 12.61 14.4955 13.3549 13.9029C16.3337 11.533 18 8.9435 18 6C18 3.64076 16.463 2 14.5 2C13.4241 2 12.2593 2.56911 11.4142 3.41421L10 4.82843L8.5858 3.41421C7.74068 2.56911 6.5759 2 5.5 2C3.55906 2 2 3.6565 2 6C2 8.9435 3.66627 11.533 6.64514 13.9029C7.39 14.4955 8.1845 15.0485 9.0661 15.6038C9.3646 15.7919 9.6611 15.9729 10 16.1752C10.3389 15.9729 10.6354 15.7919 10.9339 15.6038Z"
                fill="white"
              />
            </svg>
          </Button>
          <Button onClick={handleReloadRandomMovie} disabled={false} variant="icon">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="white">
              <path d="M10 2C12.7486 2 15.1749 3.38626 16.6156 5.5H14V7.5H20V1.5H18V3.99936C16.1762 1.57166 13.2724 0 10 0C4.47715 0 0 4.47715 0 10H2C2 5.58172 5.58172 2 10 2ZM18 10C18 14.4183 14.4183 18 10 18C7.25144 18 4.82508 16.6137 3.38443 14.5H6V12.5H0V18.5H2V16.0006C3.82381 18.4283 6.72764 20 10 20C15.5228 20 20 15.5228 20 10H18Z" fill="white" />
            </svg>
          </Button>
        </div>
      </div>
      <div className="wrapper_img_right">
        <picture className="ran_right_pic">
          <img className="ran_pic_img" src={ranMovie.posterUrl} alt="Poster Image" />
        </picture>
      </div>
    </div>
  );
};
