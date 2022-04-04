import React from "react";
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../../components/Header";
import Loading from "../../components/Loading";
import { Container, MovieDetails, MovieImg, DetailsText } from "./style";

const Details = () => {
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(null);
  const { id } = useParams();
  const API_KEY = "06ae2dc755080f5934364ba0fb9232fb";
  const image_path = "https://image.tmdb.org/t/p/w500";
  const URL_COMPLET = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=pt-BR`;
  useEffect(() => {
    async function fetchDetails() {
      setLoading(true);
      const response = await fetch(URL_COMPLET);
      const data = await response.json();
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
      setLoading(false);
    }
    fetchDetails();
  }, [id]);

  if (loading) return <Loading />;
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
            <p className="details_sinopse">
              <span className="sinopse">Sinopse:</span> <span>{movie.sinopse}</span>
            </p>
            <p className="release_date">
              Data de lançamento: <span>{movie.releaseDate}</span>
            </p>

            <div className="buttons">
              <Link to={"/"}>
                <button className="button">Página inicial</button>
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
