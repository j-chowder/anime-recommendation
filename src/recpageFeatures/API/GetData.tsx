import {useEffect, useState} from 'react'


interface Anime {
    'name': string,
    'image': string,
    'score': number,
}
interface Response {
    'animes': Anime[],
    'error': string | null,
    'loading': boolean,
}
type Category = '-select-' | 'anime' | 'genre' | 'user'

export default function useAnimeData(category: Category, search: string): Response {
    const [animes, setAnimes] = useState<Anime[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async (): Promise<Anime[]> => {
            try {
                const response = await fetch(`http://127.0.0.1:8000/categories/${category}/${search}`)

                if(!response.ok){
                    throw new Error (`Error: ${response.status}`)
                }

                const data = await response.json();
                return data.data;
            }
            catch(error) {
               throw error;
            }
        }

        fetchData()
        .then(data => {
            setAnimes(data);
            setLoading(false);
        })
        .catch(err => {
            setError(err.message);
            setLoading(false);
        }) 
        .finally(() => setLoading(false));
    }, []);
    return {animes, error, loading}
}