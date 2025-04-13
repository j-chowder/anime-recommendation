import * as React from "react";
import styled from "styled-components";
import { TitleText } from "../../homepageFeatures/HomepageHeader/Title";

const Wrapper = styled.div`
 display:flex;
 flex-direction:column;
 align-items: center;
 justify-content: center;
`
const Text = styled(TitleText)`
 font-size: 6rem;
`
const Image = styled.img`
  --s: 10px; /* control the size */
  padding: var(--s);
  width: 600px;
  height: auto;
  border: calc(2*var(--s)) solid #0000;
  outline: 1px solid #000;
  outline-offset: calc(-1*var(--s));
  background: conic-gradient(from 90deg at 1px 1px,#0000 25%,#000 0);
}
`

export default function ErrorPage(){
    return (
        <Wrapper>
            <Text>Nothing found... try something else!</Text>
            <Image src = 'src\recpageFeatures\ErrorPage\ErrorReaction.jpg' />
        </Wrapper>
    )
}