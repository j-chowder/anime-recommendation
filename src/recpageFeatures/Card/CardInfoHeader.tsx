import * as React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
 flex:display;
`

export default function InfoHeader(){
    return (
        <Wrapper>
            <div style = {{marginLeft: 0}}>
             <span>73%</span>
             <span>#1</span>
            </div>
        </Wrapper>
    )
}