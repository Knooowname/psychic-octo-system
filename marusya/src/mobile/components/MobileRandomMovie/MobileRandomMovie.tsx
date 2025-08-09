import { getRandomMovie } from "../../../api/movies";
import { MovieSchema } from "../../../api/MovieSchema";
import { useGetData } from "../../../hooks/useGetData";
import "./MobileRandomMovie.css";
import { Raiting } from "../../../ui/Raiting/Raiting";
import { Button } from "../../../ui/Button/Button";
import { Link } from "react-router";
import { useAppDispatch, useAppSelector } from "../../../store/hooks/hooks";
import { openModal } from "../../../store/slices/modalSlice";
import { fetchFavoritesUser, setFavorites } from "../../../store/slices/favoritesSlice";

export const MobileRandomMovie = () => {
  const { data, loading, refetch } = useGetData<MovieSchema>(getRandomMovie);
  const dispatch = useAppDispatch()
  const user = useAppSelector(state => state.user.user)

  if (!data || loading) {
    return <div>...Загрузка</div>;
  }

  const handleReloadMovileRandomMovie = () => {
    refetch()
  };

  const handleAddToFavorites = async () => {
    if(!user) {
      dispatch(openModal('auth'))
      return 
    }

    try {
      await dispatch(setFavorites(data.id.toString()))
      await dispatch(fetchFavoritesUser()).unwrap()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="mobile_wrapper_random_movie_all_info">
      <picture className="mobile_poster_pic">
        <img className="mobile_poster_img" src={data.posterUrl} alt="" />
      </picture>
      <div className="mobile_wrapper_info_and_title">
        <div className="mobile_wrapper_random_movie_info">
          <Raiting raiting={Number(data.tmdbRating.toFixed(1))} size="large" />
          <span className="mobile_random_movie_info_span">
            {data.releaseYear}
          </span>
          <span className="mobile_random_movie_info_span">
            {data.genres[0]}
          </span>
          <span className="mobile_random_movie_info_span">
            {data.runtime >= 60
              ? `${Math.floor(data.runtime / 60)} hour` +
                ` ${data.runtime % 60} minutes`
              : data.runtime}
          </span>
        </div>
        <h1 className="mobile_random_movie_title">{data?.title}</h1>
        <p className="mobile_random_movie_descr">{data?.plot}</p>
      </div>
      <div className="mobile_wrapper_all_btns">
        <Link to={`/${data.trailerYouTubeId}`}>
          <Button disabled={false} width={"100%"} variant="primary" onClick={() => openModal('trailer')}>
            Трейлер
          </Button>
        </Link>
        <div className="mobile_wrapper_bottom_btns">
          <Link to={`/movie/${data.id}`}>
            <Button disabled={false} width={"100%"} variant="secondary">
              О фильме
            </Button>
          </Link>
          <Button disabled={false} variant="icon" onClick={handleAddToFavorites}>
            <svg width="20" height="19" viewBox="0 0 20 19" fill="white">
              <path
                d="M14.5 0C17.5376 0 20 2.5 20 6C20 13 12.5 17 10 18.5C7.5 17 0 13 0 6C0 2.5 2.5 0 5.5 0C7.35997 0 9 1 10 2C11 1 12.64 0 14.5 0ZM10.9339 15.6038C11.8155 15.0485 12.61 14.4955 13.3549 13.9029C16.3337 11.533 18 8.9435 18 6C18 3.64076 16.463 2 14.5 2C13.4241 2 12.2593 2.56911 11.4142 3.41421L10 4.82843L8.5858 3.41421C7.74068 2.56911 6.5759 2 5.5 2C3.55906 2 2 3.6565 2 6C2 8.9435 3.66627 11.533 6.64514 13.9029C7.39 14.4955 8.1845 15.0485 9.0661 15.6038C9.3646 15.7919 9.6611 15.9729 10 16.1752C10.3389 15.9729 10.6354 15.7919 10.9339 15.6038Z"
                fill="white"
              />
            </svg>
          </Button>
          <Button
            disabled={false}
            variant="icon"
            onClick={handleReloadMovileRandomMovie}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="white">
              <path
                d="M10 2C12.7486 2 15.1749 3.38626 16.6156 5.5H14V7.5H20V1.5H18V3.99936C16.1762 1.57166 13.2724 0 10 0C4.47715 0 0 4.47715 0 10H2C2 5.58172 5.58172 2 10 2ZM18 10C18 14.4183 14.4183 18 10 18C7.25144 18 4.82508 16.6137 3.38443 14.5H6V12.5H0V18.5H2V16.0006C3.82381 18.4283 6.72764 20 10 20C15.5228 20 20 15.5228 20 10H18Z"
                fill="white"
              />
            </svg>
          </Button>
        </div>
      </div>
    </div>
  );
};
