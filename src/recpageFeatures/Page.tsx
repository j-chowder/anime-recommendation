import * as React from "react";
import styled from "styled-components"
import CardContainer from "./Card/CardContainer"
import Header from "./Header/Header"
import useAnimeData from "./API/GetData";
import ErrorPage from "./ErrorPage/Error";
import { useParams } from "react-router-dom"


const Container = styled.main`
 display:grid;
 grid-template-columns: repeat(auto-fit, minmax(370px, 1fr));
 grid-column-gap: 40px;
 grid-row-gap: 40px;
 max-width: 1200px;
 margin: 0;
`

export default function Page(){
    const {category, search} = useParams<string>()
    console.log(typeof(category), search)
    const {animes, loading, error} = useAnimeData(category, search)

    if (loading) return <p>Loading...</p>;
    if (error) return <ErrorPage />;

    return (
        <>
         <Header />
         <Container>
            {animes.slice(0,30)
            .map((anime, index) => 
               (<CardContainer key = {anime.name} name = {anime.name} image = {anime.image} rank = {index + 1} />)
            )}
         </Container>
        </>
    )
}