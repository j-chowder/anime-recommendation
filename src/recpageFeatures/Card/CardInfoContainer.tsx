import * as React from "react";
import styled from "styled-components";
import InfoBody from "./CardInfoBody";
import { useResponseContext } from "../../app/Context/ResponseContext";

const Wrapper = styled.div`
 position: relative;
 overflow: hidden scroll;
 height: 100%;
 width: calc(100% + 17px);
`
export default function InfoContainer({index}: {index:number}){
    const {animes} = useResponseContext();
    const anime = animes[index];

    return (
        <Wrapper>
            <InfoBody rank = {index + 1} score = {anime.score} />
        </Wrapper>
    )
}
