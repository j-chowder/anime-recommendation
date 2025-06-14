import {useEffect, useState} from 'react'
import { BACKEND_ORIGIN } from '../../search/APIs/useGenre'

interface Anime {
    id: number,
    name: string,
    score: number,
    genres: string,
    image: string,
    english_name: string,
    other_name: string,
    synopsis: string,
}
interface ContainsObject{
    'name': string,
    'similarity': number,
}
interface errorResponseObjectType{
    contains: ContainsObject[],
    fuzzy: ContainsObject[],
}
type errorResponse = errorResponseObjectType | -1

interface Response {
    'response': Anime[] | errorResponse
    'error': string | null,
    'loading': boolean,
}
type Category = '-select-' | 'anime' | 'genre' | 'user'


export default function useAnimeData(category: Category, search: string): Response {
    const [response, setResponse] = useState<Anime[] | errorResponseObjectType>([]);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async (): Promise<Anime[] | errorResponseObjectType> => {
            try {
                const resp = await fetch(`${BACKEND_ORIGIN}/categories/${category}/${search}`)

                if(!resp.ok){
                    throw new Error (`Error: ${resp.status}`)
                }

                const data = await resp.json();
                return data.data;
            }
            catch(error) {
               throw error;
            }
        }

        fetchData()
        .then(data => {
            setResponse(data);
            setLoading(false);
        })
        .catch(err => {
            setError(err.message);
            setLoading(false);
        }) 
        .finally(() => setLoading(false));
    }, []);
    return {response, error, loading}
}
