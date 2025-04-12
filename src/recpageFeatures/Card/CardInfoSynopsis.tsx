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
                anarosietn aieorsntie arn stoiean ansreitno ariesnt ioearnstieoarns etist aersnt arisntoi aer nsto iranso tinaros ietnraoisn toiearnstei arosent oariens toearn soietnar sieotnoaier nsiotan oirs naseirtnoa risentoia rnst ieoarns tieanrs ieotnaoies ntoairsn toiearnst i oeransietn aoris ntoiearnsietoarns
            </span>
            <Ellipses>
                ...
            </Ellipses>
        </Wrapper>
    )
}