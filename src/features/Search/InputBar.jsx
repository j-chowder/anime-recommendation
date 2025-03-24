import { useState } from 'react';
import {styled} from 'styled-components';
import SearchButton from './SearchButton.jsx';
const Input = styled.input`
    padding: 0.8em;
    margin-top: 0.5em;
    margin-bottom: 0.5em;
    color: black;
    background: papayawhip;
    border: solid;
    border-width:1px;
    border-top-left-radius:6px;
    border-bottom-left-radius:6px;
    border-right:0;
`;
const Form = styled.form`
  align-items: center;
  display: flex;
  max-width: 600px;
  width: 100%;
  max-height:40px;
`;
export default function InputBar(){
 
    // const handleChange = (e) => {
    //     setQuery(e.target.value);
    // }
   

    return (
        
        <Form id = "search" method = "POST">
         <Input aria-label = "Search" type = "search" name = "s" defaultValue = "" />
         <SearchButton>
           <svg style = {{maxWidth: '24px', maxHeight: '24px'}}>
           <path d=
            "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
           <path d="M0 0h24v24H0z" fill="none" />
          </svg>
        </SearchButton>
        </Form>
        
        
    )
    


}