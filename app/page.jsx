import { Nav } from "./comonents/navComponent";
import MovieCard from "./comonents/movieCard";


export default function Home() {
  return (
    <>
    <Nav />
    <div className="flex items-center justify-center flex-col">
      <div className="flex flex-col items-center">
        <h1 className="p-4 text-[6vw] font-bold  ">Movie Viewers!</h1>
        <h3 className="text-[3vw]">Real movie reviews and ratings</h3>
      </div>
      <br />

      <br />
      <div className="w-[80vw] flex justify-center items-center">
        <ul className="flex text-xs md:text-base lg:text-xl text-center">
          <li>Search Parameters </li>
          <li>Search Parameters </li>
          <li>Search Parameters </li>
          <li>Search Parameters </li>
          <li>Search Parameters </li>
        </ul>
      </div>
      <br />
      <MovieCard />
    </div>
    </>
  );
}
