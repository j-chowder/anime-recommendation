import * as React from "react";
import styled from "styled-components";
import FooterGenres from "./CardFooterGenres";
import BookmarkButton from "./BookmarkButton";

const Wrapper = styled.div`
 display:flex;
 align-items:center;
 padding: 0 17px;
`

export default function InfoFooter(){
    return (
        <Wrapper>
            <FooterGenres></FooterGenres>
            <BookmarkButton></BookmarkButton>
        </Wrapper>
    )
}