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
 height: 95%;
 text-transform: lowercase;
`

export default function Genre({children}: {children: string}){
    if(children.indexOf("_") > 0){
        children = children.replace(/_/g, " ");
    }
    return (
     <Container>
      {children}
     </Container>
    )
    
}