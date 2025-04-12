import * as React from "react";
import Bookmark from "./star.svg"; 
import styled from "styled-components";

const Container = styled.div`
 margin-left:auto;
 cursor: pointer;
`
const Image = styled.svg`
 viewbox: 0 0 24 24;
 width: 26px;
 aria-label: "Bookmark";
`
export default function BookmarkButton(){
    return (
        <Container>
            <Image src = {Bookmark} alt = 'Bookmark' />
        </Container>
    )
}