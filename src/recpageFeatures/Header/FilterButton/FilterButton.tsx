import * as React from 'react';
import styled from 'styled-components';
import {  useContext } from 'react';
import { filterContext } from '../../../app/Context/FilterContext';

const Wrapper = styled.div`
 display:flex;
`

export default function FilterButton(){
    const {toggleFilter} =  useContext(filterContext);

    

    return (
        <button onClick = {toggleFilter}>Filter favorites</button>
    )
}