import * as React from "react";
import styled from "styled-components"
import CardContainer from "./Card/CardContainer"
import Header from "./Header/Header"
import useAnimeData from "./API/GetData";
import ErrorPage from "./ErrorPage/Error";


const Container = styled.main`
 display:grid;
 grid-template-columns: repeat(auto-fit, minmax(370px, 1fr));
 grid-column-gap: 40px;
 grid-row-gap: 40px;
 max-width: 1200px;
 margin: 0;
`

export default function Page(){
    const {animes, loading, error} = useAnimeData()

    if (loading) return <p>Loading...</p>;
    if (error) return <ErrorPage />;

    console.table(animes)
   
    return (
        <>
         <Header />
         <Container>
            <CardContainer />
            <CardContainer />
            <CardContainer />
            <CardContainer />
            <CardContainer />
            <CardContainer />
            <CardContainer />
         </Container>
        </>
    )
}