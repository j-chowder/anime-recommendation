import * as React from "react";
import styled from "styled-components";
import FooterGenres from "./CardFooterGenres";
import BookmarkButton from "./FavoriteButton";
import FavoriteButton from "./FavoriteButton";

const Wrapper = styled.div`
 display:flex;
 align-items:center;
 padding: 0 17px;
 margin-bottom: 8px;
`

export default function InfoFooter(){
    return (
        <Wrapper>
            <FooterGenres></FooterGenres>
            <FavoriteButton></FavoriteButton>
        </Wrapper>
    )
}