import { styled } from "styled-components";
import { useFavoriteContext } from "../app/Context/FavoriteContext/FavoriteContext";
import { filterContext } from "../app/Context/FilterContext";
import * as React from 'react';

const TextContainer = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
 font-family: 'Inter';
 font-size: 1.5rem;
 padding-top: 10px;
 flex-grow: 1;
`

export default function FilterResponse(){
    const {favoritedCount} = useFavoriteContext();
    const {filter} = React.useContext(filterContext);

    if(favoritedCount === 0 && filter){
        return (
            <TextContainer>No favorites available.</TextContainer>
        )
    }
    return (null);
}