import { getTop10Movies } from "../../api/movies";
import { MovieSchema } from "../../api/MovieSchema";
import { Top10MovieCard } from "../../ui/Top10MovieCard/Top10MovieCard";
import "./Top10MovieList.css";
import { Link } from "react-router";
import { useGetData } from "../../hooks/useGetData";

export const Top10MovieList = () => {
  
  const {data, loading} = useGetData<MovieSchema[]>(getTop10Movies)

  if (loading || !data) {
    return <div>...Загрузка</div>;
  }

  return (
    <div className="wrapper_list">
      <h2 className="list_title">Топ 10 фильмов</h2>
      <ul className="top_list">
        {data.map((item, index) => (
          <li key={item.id}>
            <Link to={`/movie/${item.id}`} className="top_movie_card">
              <Top10MovieCard count={index + 1} image={item.posterUrl} display={false} closeBtn={false}/>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
