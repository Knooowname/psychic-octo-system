import { useQuery } from "@tanstack/react-query";
import { getMovies } from "../../api/movies";
import { Link, useParams } from "react-router";
import { Top10MovieCard } from "../../ui/Top10MovieCard/Top10MovieCard";
import "./MoviesForSpecificGenreList.css";
import queryClient from "../../api/queryClient";

export const MovieForSpecificGenreList = () => {
  const { genre } = useParams();

  if (!genre) {
    return;
  }

  const { data, isLoading } = useQuery(
    {
      queryFn: () => getMovies(),
      queryKey: ["movies", genre],
    },
    queryClient
  );

  if (isLoading || !data) {
    return <div>...Загрузка</div>;
  }

  const genreMovie = data.filter((item) => item.genres.includes(genre));


  return (
    <div className="wrapper_filter_movie">
      <Link to={'/genres'} className="title_link">
        <h1 className="filter_genre_title">
        {`${genre.charAt(0).toLocaleUpperCase()}${genre
          .slice(1)
          .toLocaleLowerCase()}`}
      </h1>
      </Link>
      <ul className="filter_movie_genre_list">
        {genreMovie.map((item, index) => (
          <li key={item.id}>
            <Link to={`/movie/${item.id}`}>
              <Top10MovieCard
                count={index + 1}
                display={true}
                image={item.posterUrl}
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
