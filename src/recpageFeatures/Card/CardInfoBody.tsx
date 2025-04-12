import * as React from "react";
import styled from "styled-components";
import InfoHeader from "./CardInfoHeader";
import InfoSynopsis from "./CardInfoSynopsis";

const Wrapper = styled.div`
 display:flex;
 flex-direction:column;
 min-height:0;
 padding:17px;
 position:relative;
`
export default function InfoBody(){
    return (
        <Wrapper>
            <InfoHeader></InfoHeader>
            <InfoSynopsis></InfoSynopsis>
        </Wrapper>
    )
}
