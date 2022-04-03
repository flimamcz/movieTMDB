import { Fragment, useEffect, useContext } from "react";
import { GlobalContext } from "../../components/GlobalContext";
import {Link} from 'react-router-dom'
import Header from "../../components/Header"
import Loading from "../../components/Loading";
import { API_KEY } from "../../config/API_KEY";
import { Container, MoviesContainer, AreaMovieDescription } from "./style";

const Home = () => {
  const { request, data, loading } = useContext(GlobalContext);
  const BASE_URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&language=pt-BR`;
  const URL_IMG = `https://image.tmdb.org/t/p/w500`;

  useEffect(() => {
    async function getData() {
      const response = await request(BASE_URL);
    }
    getData();
  }, [request]);

  if (loading) return <Loading />;
  return (
    <Fragment>
      <Header text="Créditos" />
      <Container>
        <MoviesContainer>
          {data &&
            data.results.map(
              ({ title, vote_average, poster_path, id }) => (
                <div key={title} className="item-movies">
                  <div className="movie">
                    <Link to={`/details/${id}`} href="">
                      <img
                        src={URL_IMG + poster_path}
                        alt={title}
                        width={200}
                        height={250}
                      />
                    </Link>
                  </div>

                  <AreaMovieDescription>
                    <p className="text-movie-bottom ">
                      Nota:{" "}
                      <span
                        className="span-vote"
                        style={{ color: vote_average >= 6 ? "green" : "red" }}
                      >
                        {vote_average.toFixed(1)}
                      </span>
                    </p>
                    <h1 className="text-movie-bottom">{title}</h1>
                  </AreaMovieDescription>
                </div>
              )
            )}
        </MoviesContainer>
      </Container>
    </Fragment>
  );
};

export default Home;
