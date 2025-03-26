import {useState, useEffect} from 'react';

export const useGenres = () => {   
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [genres, setGenres] = useState([]);
  
  useEffect(() => {
    fetch("https://api.jikan.moe/v4/genres/anime")
    .then((response) => {
      if(response.status >= 400){
        throw new Error("server error");
      }
      
      return response.json();
    })
    .then((response) => {
      console.log(response);
      const genreNames = response.data.map((obj) => {
        return obj.name;
      } )
      console.log(genreNames);
      setGenres(genreNames);
    })
    .catch((error) => setError(error))
    .finally(() => setLoading(false));
  }, []);
  return { genres, error, loading};
  }