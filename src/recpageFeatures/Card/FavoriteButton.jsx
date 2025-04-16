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
 filter:invert(42%) sepia(93%) saturate(1352%) hue-rotate(87deg) brightness(119%) contrast(119%);
 fill: blue;
 background-color: blue;
`
const Star = styled.svg`
 width: 24px;
 height: 24px;
`
export default function FavoriteButton(){
    const [favorited, setFavorite] = useState(false)

    const toggleFavorite = () => {
        setFavorite(!favorited)
    }
    let currentColor = '#000000'
    if(favorited){
        currentColor = 'blue'
    }

    return (
        <Container>
             <svg fill={currentColor} width="24px" height="24px" viewBox="0 -0.59 29.018 29.018" id="_25_-_Star" data-name="25 - Star" xmlns="http://www.w3.org/2000/svg" onClick = {toggleFavorite}>
                 <path id="_25_-_Star-2" data-name="25 - Star" d="M13.645,4.01l-2.057,6.334a1.013,1.013,0,0,1-.962.7H3.967a2.475,2.475,0,0,0-1.456,4.478L7.9,19.435a1.011,1.011,0,0,1,.367,1.131L6.208,26.9a2.476,2.476,0,0,0,3.81,2.768l5.388-3.914a1.012,1.012,0,0,1,1.188,0l5.388,3.914a2.476,2.476,0,0,0,3.81-2.768l-2.058-6.333a1.011,1.011,0,0,1,.367-1.131l5.388-3.914a2.475,2.475,0,0,0-1.456-4.478H21.374a1.013,1.013,0,0,1-.962-.7L18.355,4.01a2.477,2.477,0,0,0-4.71,0Zm1.9.618a.475.475,0,0,1,.9,0l2.058,6.334a3.012,3.012,0,0,0,2.864,2.081h6.659a.475.475,0,0,1,.28.86l-5.387,3.914a3.011,3.011,0,0,0-1.094,3.367l2.058,6.333a.476.476,0,0,1-.733.532L17.77,24.135a3.011,3.011,0,0,0-3.54,0L8.843,28.049a.476.476,0,0,1-.733-.532l2.058-6.333a3.011,3.011,0,0,0-1.094-3.367L3.687,13.9a.475.475,0,0,1,.28-.86h6.659a3.012,3.012,0,0,0,2.864-2.081l2.058-6.334Z" transform="translate(-1.491 -2.3)" fill-rule="evenodd"/>
             </svg>
        </Container>
    )
}