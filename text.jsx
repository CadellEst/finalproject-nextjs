<div>
{movies.map((movie) => (
  <div className="text-center h-[15vw] w-[15vw]" key={movie.imdbID}>
    <div className="rounded-lg overflow-hidden">
      <img src={movie.Poster} alt="" />
    </div>
    <div>
      {movies.Title} | {movie.Year}
    </div>
    <div className="text-gray-400">{movie.Genre}</div>
  </div>
))}
</div>