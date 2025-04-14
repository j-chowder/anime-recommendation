import * as React from "react";
import styled from "styled-components";
import InfoHeader from "./CardInfoHeader";
import InfoSynopsis from "./CardInfoSynopsis";

const Wrapper = styled.div`
 display:flex;
 flex-direction:column;
 min-height:0;
 padding:17px;
 padding-top: 5px;
 position:relative;
`
export default function InfoBody({rank}: {rank: number}){
    return (
        <Wrapper>
            <InfoHeader score = {87} rank = {rank}></InfoHeader>
            <InfoSynopsis></InfoSynopsis>
        </Wrapper>
    )
}
