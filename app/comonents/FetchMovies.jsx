import React from 'react'

export default function FetchMovies() {

    const title = 
  
    useEffect(() => {
        async function fetchMovies() {
          const { data } = await axios.get(
            `https://www.omdbapi.com/?s=${title}&apikey=${apikey}`
          );
          setMovies(data);
        }
        fetchMovies();
      }, []);
  
    return (
    <></>
  )
}
