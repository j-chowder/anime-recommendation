import * as React from "react";
import styled from "styled-components";
import Genre from "./Genres";
import { useResponseContext } from "../../app/Context/ResponseContext";

const Wrapper = styled.div`
 align-items: center;
 display:flex;
 font-size: 10px;
 position: relative;
 max-height: 100%;
 margin-top:0;
 gap:3px;
 max-width: 100px;
 width: 100%;
 overflow-y: scroll;
 scrollbar-width: none;
 margin-right: 10px;
 flex-wrap:wrap;
`

export default function FooterGenres({index}: {index: number}){
    const {animes} = useResponseContext();
    const anime = animes[index];
    const genres = anime.genres.split(", ")

    return (
        <Wrapper>
            {genres.map((genre) => 
             (<Genre>{genre}</Genre>)
            )}
        </Wrapper>
    )
}