import * as React from "react";
import styled from "styled-components";
import { TitleText } from "../../homepageFeatures/HomepageHeader/Title";
import image from "./ErrorReaction.jpg";
import AltSearch from "./AltSearch";

const Wrapper = styled.div`
 display:flex;
 flex-direction:column;
 align-items: center;
 justify-content: center;
 height: 100%;
 width: 100%;
`
const Container = styled.div`
 display:flex;
 align-items:center;
 justify-content: space-between;
 gap: 2rem;
 font-family: 'Inter';
 font-size: 1.5rem;
 color: #008080;
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
interface ContainsObject{
    'name': string,
    'similarity': number,
}
interface errorResponseObjectType{
    contains: ContainsObject[],
    fuzzy: ContainsObject[],
}

export default function ErrorPage({alt = undefined}: {alt: errorResponseObjectType | undefined}){

    if(alt){
        console.log(alt)
        return (
            <Wrapper>
                <Text>Did you mean...</Text>
                <Container>
                {alt.contains.map((e) => (
                    <AltSearch name = {e.name}></AltSearch>
                )
                )}
                {alt.fuzzy.filter((e => !(alt.contains.map((alreadyListed) => alreadyListed.name).includes(e.name)))) // preventing dupes b/w contains and fuzzy
                .map((e) => (
                    <AltSearch name = {e.name}></AltSearch>
                )
                )}
                </Container>
            </Wrapper>
        )
    }
    return (
        <Wrapper>
            <Text>Nothing found... try something else!</Text>
            <Image src = {image} />
        </Wrapper>
    )
}