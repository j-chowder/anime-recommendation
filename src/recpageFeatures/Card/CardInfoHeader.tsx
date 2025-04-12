import * as React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
 display:flex;
 justify-content: space-between;
`
const normStyling = {
    color: '#213547'
}
const EightyStyling = {
    color: 'seagreen'
}
const EightyPlusStyling =  {
    color: '#00A86B',
    fontWeight: '600'
}
interface styleObject {
    color: string,
    fontWeight?: string;
}

export default function InfoHeader({score, rank}: {score: number, rank: number}){
     function styling(): styleObject {
        if(score > 85){
            return EightyPlusStyling
        }
        else if(score >= 80){
            return EightyStyling
        }
        else{
            return normStyling
        }
    }

    const textStyling = styling()
    
    return (
        <Wrapper>
             <span style = {textStyling}>{score}%</span>
             <span>#{rank}</span>
        </Wrapper>
    )
}