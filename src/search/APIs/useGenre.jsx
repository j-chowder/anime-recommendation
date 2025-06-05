import {useState, useEffect} from 'react';

export const useGenres = () => {   
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [genres, setGenres] = useState([]);
  
  useEffect(() => {
    fetch("http://127.0.0.1:8000/genres")
    .then((response) => {
      if(response.status >= 400){
        throw new Error("server error");
      }
      
      return response.json();
    })
    .then((response) => {
      console.log(response);
      const genreNames = response.data
      console.log(genreNames);
      setGenres(genreNames);
    })
    .catch((error) => setError(error))
    .finally(() => setLoading(false));
  }, []);
  return { genres, error, loading};
  }
