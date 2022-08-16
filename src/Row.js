import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./Row.css";

const image_url = "https://image.tmdb.org/t/p/original/";
const url = "https://api.themoviedb.org/3";
function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  // const url = `https://api.themoviedb.org/3${fetchUrl}`;
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(`${url}${fetchUrl}`);
      setMovies(response.data.results);
      // console.log(response.data.results);
    }
    fetchData();
  }, [fetchUrl]);

  // console.log(movies);

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row__posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            src={`${image_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
}
export default Row;
