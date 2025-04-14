import { useContext, useState } from 'react';
import { categoryValueContext } from '../../app/Context/CategoryValueContext.jsx';
import { exchangeContext } from '../../app/Context/APIExchangeContext.js';
import {styled} from 'styled-components';
import SearchButton from './SearchButton.jsx';
import SearchDropdown from './Dropdown/SearchDropdown.jsx';
import { useNavigate } from 'react-router-dom';
const Input = styled.input`
    padding: 0.8em;
    color: black;
    background: papayawhip;
    border: solid;
    border-width:1px;
    border-top-left-radius:6px;
    border-bottom-left-radius:6px;
    border-right:0;
    -webkit-appearance: none;
    display: inline-block; 
  box-sizing: border-box;
  flex-grow:2;
  flex-basis:500px;
  max-height:40px;
  height:100%;
  outline: none;
  font-family: "Lora";
  font-size:20px;
`;
const Form = styled.form`
  align-items: center;
  display: flex;
  max-width: 600px;
  width: 100%;
  max-height:40px;
  height:100%;
`;

export default function InputBar({defValue = ""}){
  const {category} = useContext(categoryValueContext);
  const {setGetter} = useContext(exchangeContext)
  const navigate = useNavigate();
  const [query, setQuery] = useState('');

  switch(category){
    case "Genre":
      defValue = "e.g. Slice of Life"
      break;
    case "Anime":
      defValue = "e.g. Fruits Basket"
      break;
    case "User":
      defValue = "e.g. https://myanimelist.net/profile/MAL_editing_team"
      break;    
  } 

const handleChange = (e) => {
  try{
    setQuery(e.target.value);
  }
  catch(error){
    setQuery(e);
  }
}
const search = (formData) => {
  const input = formData.get("s");
  navigate(`/${category.toLowerCase()}/${input}`);
}
    return (
        <>
        <Form id = "search" autoComplete = "off" action = {search}>
         <Input aria-label = "Search" type = "search" name = "s" placeholder = {defValue} contentEditable = "true" onChange = {handleChange} value = {query} />
         <SearchButton>
           <svg style = {{maxWidth: '24px', maxHeight: '24px'}}>
           <path d=
            "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
           <path d="M0 0h24v24H0z" fill="none" />
          </svg>
        </SearchButton>
        </Form> 
        <SearchDropdown query = {query} handleChange = {handleChange} />

        </>
        
    )
    
}
// export const searchAction = async ({ request }) => {
//   console.log("herro" + response)
//   const data = await request.formData();
//   const submission = {
//     search: data.get("s"),
//     category: value
//   }
//   console.log("herro " + submission);
//   if(submission.search.length < 10){
//     return {error: 'Message must be over 10 chars long'}
//   }
//   return redirect('/test')
// }