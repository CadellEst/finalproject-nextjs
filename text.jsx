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