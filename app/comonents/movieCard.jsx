"use client";

import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { getStaticProps } from "../layout";

const MovieCard = () => {
  const { movieinfo } = useParams();
  const [movies, setMovies] = useState([]);
  const apikey = process.env.NEXT_PUBLIC_SOCIAL;


  useEffect(() => {
    async function fetchMovies() {
      const { data } = await axios.get(
        `https://www.omdbapi.com/?s=007&type=movie&page=1&apikey=${apikey}`
      );
      setMovies(data.Search);
      console.log(data);
    }
    fetchMovies();
  }, []);


  return (
    <div className="flex items-center justify-center">
      <div key={movieinfo}
      className="flex flex-wrap items-center justify-center w-[80vw] "
      >
    {
      movies.flatMap((movie) => (
           <Link
             href={"/movieinfo"}
             key={movie.index}
             className="hover:cursor-pointer hover:scale-110 transition-all"
           >
             <div
               className="relative text-center p-4 w-[30vw] max-w-[200px]"
               
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
        ))
      }
         </div>
       </div>

  )
};
export default MovieCard;
