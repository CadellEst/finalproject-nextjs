import MovieCard from "./comonents/movieCard";
import { Nav } from "./comonents/navComponent";
import SearchBar from "./comonents/SearchBar";
import { logo } from "../public/images/logo.png";

export default function Home() {
  return (
    <>
      <Nav />
      <div className="flex flex-col justify-center items-center p-10">
        <img
          className="hover:scale-105 invert animate-bounce"
          src="https://i.pinimg.com/564x/1d/b3/09/1db30970fc762ca7190000b9c03fd294.jpg"
          alt={logo}
            
          
          width={150}
          height={150}
        />
        <h1 className="font-bold text-2xl">Search Movies Today</h1>
      </div>

      <SearchBar />
    </>
  );
}
