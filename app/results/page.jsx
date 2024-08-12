import React from 'react'
import { Nav } from '../comonents/navComponent'
import FetchMovies from '../comonents/SearchBar'
import MovieCard from '../comonents/movieCard'
import SearchBar from '../comonents/SearchBar'

const Results = () => {
  return (
    <div>
      <Nav />
      <SearchBar />
      <br />
      <MovieCard />
    </div>
  )
}

export default Results