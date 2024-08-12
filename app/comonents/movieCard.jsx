"use client";

import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { getStaticProps } from "../layout";

const MovieCard = () => {
  const { id } = useParams();
  const [movies, setMovies] = useState([]);
  const apikey = process.env.NEXT_PUBLIC_API_KEY


 

  useEffect(() => {
    async function fetchMovies() {
      const { data } = await axios.get(
        `http://www.omdbapi.com/?t=avengers&apikey=${apikey}`
      );
      setMovies(data);
    }
    fetchMovies();
  }, []);

console.log(movies)
  
  return (
    movies.map((movie) => (
      <div className="flex items-center justify-center">
      <div className="flex flex-wrap items-center justify-center w-[80vw] ">
        <Link href={"/movieinfo"} className="hover:cursor-pointer hover:scale-110 transition-all">
          <div
            className="relative text-center p-4 w-[30vw] max-w-[200px]"
            key={movie.index}
          >
            <div className="rounded-lg overflow-hidden ">
              <img src={movie.Poster} alt="" />
            </div>
            <br />
            <div>
              {movie.Title} | {movie.Year}
            </div>
            <div className="text-gray-400">{movie.Genre}</div>
          </div>
        </Link>

      </div>
    </div>
    ))
   
  );
};
export default MovieCard;
