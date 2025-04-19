import * as React from "react";
import styled from "styled-components";
import InfoHeader from "./CardInfoHeader";
import InfoSynopsis from "./CardInfoSynopsis";
import { useResponseContext } from "../../app/Context/ResponseContext";

const Wrapper = styled.div`
 display:flex;
 flex-direction:column;
 min-height:0;
 padding:17px;
 padding-top: 5px;
 position:relative;
`
export default function InfoBody({index}: {index: number}){
    const {animes} = useResponseContext();
    const anime = animes[index];

    return (
        <Wrapper>
            <InfoHeader score = {anime.score} rank = {index + 1}></InfoHeader>
            <InfoSynopsis>{anime.synopsis}</InfoSynopsis>
        </Wrapper>
    )
}
