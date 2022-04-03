import React from "react";
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../../components/Header";
import Loading from "../../components/Loading";
import { Container, MovieDetails, MovieImg, DetailsText } from "./style";

const Details = () => {
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(null)
  const { id } = useParams();
  const API_KEY = "06ae2dc755080f5934364ba0fb9232fb";
  const image_path = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    setLoading(true)
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=pt-BR`
    )
      .then((response) => response.json())
      .then((data) => {
        const { title, poster_path, release_date, overview, homepage } = data;
        const movie = {
          id,
          title,
          sinopse: overview,
          image: `${image_path}${poster_path}`,
          releaseDate: release_date,
          homepage,
        };
        setMovie(movie);
      });
      setLoading(false)
  }, [id]);

  if(loading) return <Loading />

  return (
    <div>
      <Header text={"Créditos"} />
      <Container>
        <MovieDetails>
          <MovieImg>
            <img src={movie.image} alt={movie.title} />
          </MovieImg>

          <DetailsText>
            <h1>{movie.title}</h1>
            <p>
              Sinopse: <span>{movie.sinopse}</span>
            </p>
            <p className="release_date">
              Data de lançamento: <span>{movie.releaseDate}</span>
            </p>

            <div className="buttons">
              <Link to={"/"}>
                <a className="button">Página inicial</a>
              </Link>

              <a
                className="button"
                href={movie.homepage}
                target="_blank"
                rel="noreferrer noopener"
              >
                Página Oficial
              </a>
            </div>
          </DetailsText>
        </MovieDetails>
      </Container>
    </div>
  );
};

export default Details;