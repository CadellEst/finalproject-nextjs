"use client";

import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Nav } from "../comonents/navComponent";
import SearchBar, { movies } from "../comonents/SearchBar";
import { usePathname, useParams } from "next/navigation";

function MovieInfo({}) {
  const params = new URLSearchParams(document.location.search);
  const imdbID = params.get("");
  const { movieinfo } = useParams();
  const [movies, setMovies] = useState([]);
  const apikey = process.env.NEXT_PUBLIC_SOCIAL;

  console.log(movieinfo);

  async function fetchMovies() {
    const { data } = await axios.get(
      `https://www.omdbapi.com/?i=${movieinfo}&apikey=${apikey}`
    );
    setMovies(data);
    console.log(data);
  }

  useEffect(() => {
    fetchMovies();
  }, []);

  console.log(movies);
  return (
    <div>
      <Nav />
      <SearchBar />
      <br className="" />
      <div className="relative text-center p-10 flex items-center justify-center">
        <div className="rounded-lg overflow-hidden  ">
          <div className="flex items-center justify-center">
          <img src={movies.Poster} alt="" className="scale-75 md:scale-90 lg:scale-105 "/>
          </div>
          <br />
          <div className="lg:text-6xl md:text-4xl text-3xl ">{movies.Title}</div>
          <div className="text-gray-400 md:text-2xl text-xl lg:text-3xl">
            {movies.Year}
          </div>
          <div className="text-2xl sm:text-xl text-bold">Rated {movies.Rated}</div>
        </div>

        <div className="w-[60vw] p-8 lg:text-2xl  md:text-xl text-md  max-w-[600px]">
          <div className="">
            <span className="text-blue-400">Plot:</span> {movies.Plot}
          </div>
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
            <span className="text-blue-400">Awards: </span>
            {movies.Awards}
          </div>
          <div>
            <span className="text-blue-400">IMDB Rating:</span>{" "}
            {movies.imdbRating}
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default MovieInfo;
