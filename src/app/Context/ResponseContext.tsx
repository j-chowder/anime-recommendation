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
interface okResponseObjectType{
    animes: Array<Anime>,
}

export const responseContext = createContext<okResponseObjectType>({
    animes: [],
});


export function useResponseContext() {
    const context = useContext(responseContext);
    if(!context){
        throw new Error(
            "useResponseContext must be used within a ResponseContextProvider"
        );
    }
    return context;
}