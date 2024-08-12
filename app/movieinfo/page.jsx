"use client";

import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useParams } from "next/navigation";
import { Nav } from "../comonents/navComponent";
import SearchBar from "../comonents/SearchBar";

const MovieInfo = () => {
  const { id } = useParams();
  const [movies, setMovies] = useState([]);
  const apikey = process.env.NEXT_PUBLIC_API_KEY;

  

  useEffect(() => {
    async function fetchMovies() {
      const { data } = await axios.get(
        `http://www.omdbapi.com/?t=deadpool&apikey=${apikey}`
      );
      setMovies(data);
    }
    fetchMovies();
  }, []);

  console.log(movies);

  return (
    <div>
      <Nav />
      <SearchBar />
      <br className="" />
      <div
        className="relative text-center p-10 flex items-center justify-center"
        key={movies.index}
      >
        <div className="rounded-lg overflow-hidden flex-col">
          <img src={movies.Poster} alt="" />
          <br />
          <div className="text-4xl">{movies.Title}</div>
          <div className="text-gray-400 text-2xl">{movies.Year}</div>
          <div className="text-2xl text-bold">Rated {movies.Rated}</div>
        </div>

        <div className="w-[60vw] p-8 text-2xl max-w-[600px]">
          <div className="">
          <span className="text-blue-400">
            Plot:</span> {movies.Plot}</div>
          <br />
          <div>
            <span className="text-blue-400">Cast:</span> {movies.Actors}
          </div>
          <div>
            <span className="text-blue-400">Director: </span> {movies.Director}
          </div>
          <div>
            <span className="text-blue-400">Writer:</span> {movies.Writer}
          </div>
          <div>
          <span className="text-blue-400">
            Awards: </span> 
            {movies.Awards}</div>
          <div>
          <span className="text-blue-400">
            IMDB Rating:</span>  {movies.imdbRating}</div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default MovieInfo;
