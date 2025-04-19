import * as React from "react"
import { createContext, useContext, useState } from "react"

interface Anime{
    name: string,
    score: number,
    genres: string,
    image: string,
    english_name: string,
    other_name: string,
    synopsis: string,
}
interface responseObjectType{
    animes: Anime[],
    setAnimeData: (animeData: Anime[]) => void,
}
const responseContext = createContext<responseObjectType>({
    animes: [],
    setAnimeData: (animeData: Anime[]) => {},
});

export default function ResponseContextProvider({children}: {children: any}){
    const [animes, setAnimes] = useState<Anime[]>([]);

    const setAnimeData = (animeData: Anime[]) => {
        setAnimes(animeData);
    }
    return (
            <responseContext.Provider value = {{ animes, setAnimeData}}>
                {children}
            </responseContext.Provider>
    )
}

export function useResponseContext() {
    const context = useContext(responseContext);
    if(!context){
        throw new Error(
            "useResponseContext must be used within a ResponseContextProvider"
        );
    }
    return context;
}