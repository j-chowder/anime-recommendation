import * as React from "react";
import styled from "styled-components";
import Genre from "./Genres";

const Wrapper = styled.div`
 align-items: center;
 display:flex;
 font-size: 10px;
 flex-wrap: wrap;
 height: 10px;
 margin-top:0;
 gap:3px;
`

export default function FooterGenres(){
    return (
        <Wrapper>
            <Genre>Action</Genre>
            <Genre>Drama</Genre>
            <Genre>Sci-fi</Genre>
        </Wrapper>
    )
}