import * as React from 'react';
import styled from 'styled-components';
import {  useContext } from 'react';
import { filterContext } from '../../../app/Context/FilterContext';

const Wrapper = styled.button`
 display:flex;
`

export default function FilterButton(){
    const {toggleFilter} =  useContext(filterContext);
    const [fill, setFill] = React.useState('#000000');
    const handleClick = () => {
        toggleFilter();
        toggleFill();
    }
    const toggleFill = () => {
        if(fill === '#000000'){
            setFill('blue');
        }
        else{
            setFill('#000000');
        }
    }

    return (
        <svg xmlns="http://www.w3.org/2000/svg" onClick={handleClick} style={{'cursor': 'pointer'}} height="48px" viewBox="0 -960 960 960" width="48px" fill={fill}><path d="M200-120v-665q0-24 18-42t42-18h440q24 0 42 18t18 42v665L480-240 200-120Zm60-91 220-93 220 93v-574H260v574Zm0-574h440-440Z"/></svg>
    )
}