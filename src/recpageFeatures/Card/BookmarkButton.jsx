import * as React from "react";
import styled from "styled-components";

const Container = styled.div`
 margin-left:auto;
 margin-top:2px;
 cursor: pointer;
 display:flex;
 align-items:center;
`
const Image = styled.img`
 width: 24px;
`
export default function BookmarkButton(){
    return (
        <Container>
            <Image alt = 'Bookmark' src = 'src\recpageFeatures\Card\star.svg' />
        </Container>
    )
}