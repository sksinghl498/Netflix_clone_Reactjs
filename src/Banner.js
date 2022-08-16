import React, { useEffect, useState } from "react";
import request from "./request";
import axios from "axios";
import "./Banner.css";
const url = "https://api.themoviedb.org/3";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        `${url}${request.fetchNetflixOriginals}`
      );
      setMovie(
        response.data.results[
          Math.floor(Math.random() * response.data.results.length - 1)
        ]
      );
    }
    fetchData();
  }, []);
  console.log(movie);

  function truncate(str, n) {
    return str?.length > n ? "..." : str;
  }
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center"
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">List</button>
        </div>

        <h1 className="banner__description">
          {truncate(movie?.overview, 300)}
        </h1>
      </div>

      <div className="banner__fadebottom" />
    </header>
  );
}
export default Banner;
