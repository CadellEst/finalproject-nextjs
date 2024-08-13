"use client";

import { useParams } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import Link from "next/link";


export default function SearchBar() {
  const { movieinfo } = useParams();
  const [movies, setMovies] = useState([]);
  const apikey = process.env.NEXT_PUBLIC_SOCIAL;
  const [searchTitle, setSearchTitle] = useState([]);
  

  async function fetchMovies(searchTitle) {
    const { data } = await axios.get(
      `http://www.omdbapi.com/?s=${searchTitle}&page=1&apikey=${apikey}`
    );
    setMovies(data.Search);
   
    
  }

 (() => {
    fetchMovies();
  }, []);

  function onSearch() {
    fetchMovies(searchTitle);
  }

  

  return (
    <>
      <div className=" flex items-center justify-center">
        <input
          type="text"
          value={searchTitle}
          onChange={((e) => setSearchTitle(e.target.value))}
          onKeyPress={(e) => e.key === 'Enter' && onSearch() && setSearchTitle([])} 
          placeholder="Search Movies"
          id="id"
          className="
        flex items-center hover:text-xl transition-all
        w-[50vw] min-w-[200px] h-[6vw] text-center text-black bg-gray-700 border border-white
        hover:border-blue-400  text-[3vw]"
        />
        <button
          onClick={() => onSearch()}
          className="border w-[10vw] min-w-[60px] h-[6vw] hover:border-blue-400 hover:text-blue-400
          hover:bg-blue-900 hover:bg-opacity-30 transition-all text-[2vw] "
          id="movie-search-box"
        >
          Search
        </button>
      </div>

      <div className="flex items-center justify-center">
        <div className="flex flex-wrap items-center justify-center w-[80vw] ">
          {!searchTitle ? 
          <div>
            <h1 className="p-6 text-4xl font-bold">Search for movies now!</h1>
          </div>
          
          : 
          movies.flatMap((movie) => (
            <Link
              href={`/${movie.imdbID}`}
              key={movie.index}
              className="hover:cursor-pointer hover:scale-110 transition-all"
            >
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
          ))}
        </div>
      </div>
      
    </>
  );
}


