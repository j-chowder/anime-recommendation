import * as React from "react";
import styled from "styled-components"
import CardContainer from "./Card/CardContainer"
import Header from "./Header/Header"
import useAnimeData from "./API/GetData";
import ErrorPage from "./ErrorPage/Error";
import { useParams } from "react-router-dom";
import FilterContextProvider from "../app/Context/FilterContext";
import { responseContext } from "../app/Context/ResponseContext";
import { useFavoriteContext } from "../app/Context/FavoriteContext/FavoriteContext";
import FilterResponse from "./FilterResponse";

const Container = styled.main`
 display:grid;
 grid-template-columns: repeat(auto-fit, minmax(370px, 1fr));
 grid-column-gap: 40px;
 grid-row-gap: 40px;
 max-width: 1200px;
 position: relative;
 margin: 0;
`

interface ContainsObject{
    'name': string,
    'similarity': number,
}
interface errorResponseObjectType{
    contains: ContainsObject[],
    fuzzy: ContainsObject[],
}

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

type Category = '-select-' | 'anime' | 'genre' | 'user'

export default function Page(){
    const {category, search} = useParams<{category: Category, search: string}>()
    const {response, loading, error} = useAnimeData(category as Category, search as string)
    const {favoritedCount} = useFavoriteContext();
    
    if (loading) return <p>Loading...</p>;

    if("fuzzy" in response){
        return <ErrorPage alt = {response as errorResponseObjectType} />
    }

    const animes: Anime[] = response as Anime[]

    if (error || animes.length == 0) return <ErrorPage alt = {undefined} />;

    return (
        <>
         <FilterContextProvider>
          <Header />
          <responseContext.Provider value = {{animes}}>
           <Container>
            {animes.slice(0,30)
            .map((anime, index) => 
               (<CardContainer 
                index = {index}
                key = {index}
                />)
            )}
           </Container>
            <FilterResponse />
          </responseContext.Provider>
         </FilterContextProvider>
        </>
    )
}