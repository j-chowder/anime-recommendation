import {useEffect, useState} from 'react'

interface Anime {
    'name': string,
    'image': string
}
interface Response {
    'animes': Anime[],
    'error': string | null,
    'loading': boolean,
}

export default function useAnimeData(): Response {
    const [animes, setAnimes] = useState<Anime[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async (): Promise<Anime[]> => {
            try {
                const response = await fetch('')

                if(!response.ok){
                    throw new Error (`Error: ${response.status}`)
                }

                const data: Anime[] = await response.json();
                return data;
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