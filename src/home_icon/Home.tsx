import * as React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Wrapper = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
 cursor: pointer;
`

export default function Home(){
    return (
        <Wrapper>
            <Link to="/">
            <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9.98572 20.67V15.6272C9.98572 15.0749 10.4334 14.6272 10.9857 14.6272H13.0143C13.5666 14.6272 14.0143 15.0749 14.0143 15.6272V20.8458" stroke="black"/><path d="M4 11V19C4 20.1046 4.89543 21 6 21H18C19.1046 21 20 20.1046 20 19V11" stroke="black" stroke-linecap="round"/><path d="M2.59998 11.9415L11.9999 3.8844L19.6139 10.4106L21.3999 11.9415" stroke="black" stroke-linecap="round"/></svg>
            </Link>
        </Wrapper>
    )
}