import * as React from "react";
import { useState } from "react";
import styled from "styled-components";
import star from "./star.svg"; 

const Container = styled.div`
 margin-left:auto;
 margin-top:2px;
 cursor: pointer;
 display:flex;
 align-items:center;
`
const Image = styled.img`
 width: 24px;
 color: blue;
`
export default function FavoriteButton(){
    const [favorited, setFavorite] = useState(false)

    const toggleFavorite = () => {
        setFavorite(!favorited)
    }
    let color = 'none !important'
    if(favorited){
        color = 'blue !important'
    }

    return (
        <Container>
            <Image alt = 'Bookmark' src = {star} onClick ={toggleFavorite} fill='currentColor' />
        </Container>
    )
}