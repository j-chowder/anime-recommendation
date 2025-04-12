import * as React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
 font-size: 12px;
 line-height: 1.6;
 margin-top: 6px;
`
const Ellipses = styled.span`
 position: absolute;
 box-sizing: border-box;
`
const Remainder = styled.span`
 box-sizing: border-box;
`

export default function InfoSynopsis(){
    return (
        <Wrapper>
            <span style = {{boxSizing: 'border-box'}}>
                anarosietn aieorsntie arn stoiean ansreitno ariesnt ioearnstieoarns etinaro sietnar ioesntearsontare stoearns tieanrsetinareist aersnt
            </span>
            <Ellipses>
                ...
            </Ellipses>
        </Wrapper>
    )
}