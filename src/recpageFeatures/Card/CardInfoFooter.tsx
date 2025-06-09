import * as React from "react";
import styled from "styled-components";
import FooterGenres from "./CardFooterGenres";
import FavoriteButton from "./FavoriteButton";

const Wrapper = styled.div`
 display:flex;
 align-items:center;
 padding: 0 17px;
 height: 30px;
 margin-bottom: 8px;
 flex-wrap: wrap;
`

export default function InfoFooter({toggleFavorite, favorited, index}: {index: number, favorited: boolean, toggleFavorite: () => void}){
    return (
        <Wrapper>
            <FooterGenres index = {index}></FooterGenres>
            <FavoriteButton toggleFavorite={toggleFavorite} favorited = {favorited}></FavoriteButton>
        </Wrapper>
    )
}