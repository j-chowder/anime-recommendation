import * as React from "react";
import styled from "styled-components";
import CardTitles from "./CardTitles";
import { useResponseContext } from "../../app/Context/ResponseContext";

const Cover = styled.div`
 cursor: pointer;
 display: flex;
 flex-direction: column;
 justify-content: flex-end;
 position: relative;
 z-index: 10;
`
const Image = styled.img`
 object-fit: cover;
 object-position: center;
 overflow-clip-margin: context-box;
 position: absolute;
 width: 100%;
 height: 100%;
`
const Overlay = styled.div`
    display:block;
    object-fit: cover;
    background-color: rgba(0,0,0,0.8);
    font-size: 1.4rem;
    position: relative;
    max-width: 185px;
    width: 100%;
    font-weight: 600;
`

export default function CardCover({index}: {index: number}){
    const {animes} = useResponseContext();
    console.table(animes);
    const anime = animes[index];
    return (
        <Cover>
            <Image src = {anime.image}></Image>
            <Overlay>
                <CardTitles titles = {[anime.name, anime.english_name, anime.other_name]}></CardTitles>
            </Overlay>
        </Cover>
    )
}