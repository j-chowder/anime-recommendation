import { useState } from 'react';
import {styled} from 'styled-components';
import SearchButton from './SearchButton.jsx';
import { Form, useActionData } from 'react-router-dom';
const Input = styled.input`
    padding: 0.8em;
    color: black;
    background: papayawhip;
    border: solid;
    border-width:1px;
    border-top-left-radius:6px;
    border-bottom-left-radius:6px;
    border-right:0;
    display: inline-block; 
  box-sizing: border-box;
  flex-grow:2;
  flex-basis:500px;
`;
// const Form = styled.Form`
//   align-items: center;
//   display: flex;
//   max-width: 600px;
//   width: 100%;
//   max-height:40px;
// `;
export default function InputBar({value}){
  
  let defValue = "";
  switch(value){
  case "Genre":
    defValue = "e.g. Slice of Life"
    break;
  case "Anime":
    defValue = "e.g. Fruits Basket"
    break;
  case "MyAnimeList":
    defValue = "e.g. https://myanimelist.net/profile/MAL_editing_team"
    break;    
} 
    
    return (
        
        <Form id = "search" method = "POST" action = "/">
         <Input aria-label = "Search" type = "search" name = "s" placeholder = {defValue} contentEditable = "true" />
         <SearchButton>
           <svg style = {{maxWidth: '24px', maxHeight: '24px'}}>
           <path d=
            "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
           <path d="M0 0h24v24H0z" fill="none" />
          </svg>
        </SearchButton>
         {data && data.error && <p>{data.error}</p>}
        </Form>
        
        
    )
    


}
export const searchAction = async ({ request }) => {
  const data = await request.formData();
  const submission = {
    search: data.get("s"),
    category: value
  }
  console.log(submission);
  if(submission.search.length < 10){
    return {error: 'Message must be over 10 chars long'}
  }

  return redirect('/test')
}