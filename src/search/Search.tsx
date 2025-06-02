import { styled } from "styled-components";
import * as React from 'react'
import DropDown from "./CategoryDropdown/DropDown";
import InputBar from "./InputBar";

const SearchWrapper = styled.div`
 display:flex;
 flex-direction:column;
 align-items:center;
 justify-content:center;
 gap:8px;
 min-width:800px;
`

export default function Search({defValue}: {defValue?: string }){
    return (
        <SearchWrapper>
            <DropDown />
            <InputBar defValue={defValue} />
        </SearchWrapper>
    )    
}

