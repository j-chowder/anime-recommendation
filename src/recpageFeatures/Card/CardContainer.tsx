import * as React from 'react'
import styled from 'styled-components'
import CardCover from './CardCover'
import CardInfo from './CardInfo'

const Card = styled.article`
 display: inline-grid;
 grid-template-columns: 185px auto;
 border: 1px solid black;
 border-radius: 1rem;
 padding: 0
 margin: 0
 position:relative;
 text-align: left;
 overflow: hidden;
 min-width: 370px;
 width: 100%;
 height: 265px;
`

export default function CardContainer({name, image, rank, score}: {name: string, image: string, rank: number, score: number }){
    return (
        <Card>
         <CardCover name={name} image={image} />
         <CardInfo rank={rank} score = {score} />
        </Card>
    )
}