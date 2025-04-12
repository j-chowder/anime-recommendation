import * as React from "react";
import styled from "styled-components";
import InfoBody from "./CardInfoBody";
const Wrapper = styled.div`
 position: relative;
 overflow: hidden;
 height: 100%
 :hover{
  overflow-y: scroll;
 }
`
export default function InfoContainer(){
    return (
        <Wrapper>
            <InfoBody>
            </InfoBody>
        </Wrapper>
    )
}
