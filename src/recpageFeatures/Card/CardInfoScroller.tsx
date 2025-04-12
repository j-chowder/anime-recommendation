import * as React from "react";
import styled from "styled-components";
import InfoBody from "./CardInfoBody";

const Wrapper = styled.div`
 position: relative;
 overflow: hidden scroll;
 height: 100%;
 width: calc(100% + 17px);
`
export default function InfoContainer(){
    return (
        <Wrapper>
            <InfoBody>
            </InfoBody>
        </Wrapper>
    )
}
