import * as React from "react"
import { createContext, useContext, useState } from "react"

interface Anime{
    id: number
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
}
export const responseContext = createContext<responseObjectType>({
    animes: [],
});

export default function ResponseContextProvider({children}: {children: any}){
    const [animes, setAnimes] = useState<Anime[]>([]);
    console.log('hello');
    const setAnimeData = (animeData: Anime[]) => {
        console.log(`in: ${animeData}`)
        setAnimes(animeData);
    }
    console.table(animes)
    return (
            <responseContext.Provider value = {{animes}}>
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