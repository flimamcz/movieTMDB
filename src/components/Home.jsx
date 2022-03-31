import { Fragment, useEffect, useContext } from "react";
import { GlobalContext } from "./GlobalContext";
import Header from "./Header";
import "../assets/styles/Home.css";
import Loading from "./Loading";
import { API_KEY } from "../config/API_KEY";
const Home = () => {
  const { request, data, loading } = useContext(GlobalContext);
  const BASE_URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&language=pt-BR`;
  const URL_IMG = `https://image.tmdb.org/t/p/w500`;

  useEffect(() => {
    async function getData() {
      const response = request(BASE_URL);
    }
    getData();
  }, [request]);

  if (loading) return <Loading />;
  return (
    <Fragment>
      <Header text="Página Inicial" />
      <section className="container">
        <div className="movies-container">
          {data &&
            data.results.map(
              ({ title, vote_average, poster_path, overview, id }) => (
                <div key={title} className="item-movies">
                  <div className="movie">
                    <img
                      src={URL_IMG + poster_path}
                      alt={title}
                      width={200}
                      height={250}
                    />
                  </div>

                  <div className="area-movie-bottom">
                    <p className="text-movie-bottom ">
                      Avaliação:{" "}
                      <span
                        className="span-vote"
                        style={{ color: vote_average >= 6 ? "green" : "red" }}
                      >
                        {vote_average}
                      </span>
                    </p>
                    <h1 className="text-movie-bottom">{title}</h1>
                  </div>
                </div>
              )
            )}
        </div>
      </section>
    </Fragment>
  );
};

export default Home;
