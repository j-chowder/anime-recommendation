import * as React from "react";
import styled from "styled-components";
import InfoFooter from "./CardInfoFooter";
import InfoContainer from "./CardInfoContainer";
const Info = styled.div`
 display: grid;
 grid-template-columns: 100%
 grid-template-rows: auto 44px;
 min-height: 0;
 min-width: 0;
`

export default function CardInfo({index, favorited, toggleFavorite}: {index: number, favorited: boolean, toggleFavorite: () => void}){
    return (
        <Info>
            <InfoContainer index = {index} />
            <InfoFooter index = {index} favorited = {favorited} toggleFavorite = {toggleFavorite} />
        </Info>
    )
}