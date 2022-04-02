import React from "react";
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../assets/styles/Details.css";
const Details = () => {
  const { id } = useParams();
  const API_KEY = "06ae2dc755080f5934364ba0fb9232fb";
  const [movie, setMovie] = useState({});
  const image_path = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=pt-BR`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
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
  }, [id]);

  return (
    <div>
      <Header text={"Página Inicial"} />
      <div className="container">
        <div className="movie_details">
          <div className="movie_img">
            <img src={movie.image} alt={movie.title} />
          </div>

          <div className="details">
            <h1>{movie.title}</h1>
            <p>
              Sinopse: <span>{movie.sinopse}</span>
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
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Details;
