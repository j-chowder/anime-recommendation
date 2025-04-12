import * as React from "react";
import styled from "styled-components";

const Container = styled.div`
 border-radius: 10px;
 background-color: gray;
 padding:0 5px;
 justify-content:center;
 align-items:center;
 display:flex;
 font-size: 10px;
 font-weight: 700;
 height: 20px;
 text-transform: lowercase;
`

export default function Genre({children}: {children: any}){
    return (
     <Container>
      {children}
     </Container>
    )
    
}