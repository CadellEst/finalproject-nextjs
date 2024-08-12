"use client";

import React from "react";




export default function SearchBar() {
  


  return (
    <div className=" flex items-center justify-center">
      <input
        type="text"
        placeholder="Search Movies"
        id="id"
        className="
        flex items-center
        w-[50vw] h-[6vw] text-center text-black bg-gray-700 border border-white
        hover:border-blue-400 text-[vw]"
      />
      <button 
      className="border w-[10vw] h-[6vw] hover:border-blue-400 hover:text-blue-400"
      id="movie-search-box">Search</button>
    </div>
  );
}
