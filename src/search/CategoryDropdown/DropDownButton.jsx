import {useContext} from 'react';
import {categoryValueContext } from '../../app/Context/CategoryValueContext.jsx';
import {styled} from 'styled-components';
import Arrow from './Arrow.jsx'
const Button = styled.button`
  border-radius: 4px;
  font-weight:bold; 
  color:white; 
  background-color:#564c4D;
  display:flex;
  align-items:center; 
  gap:15px;
  font-family: Garamond;
`

export default function DropDownButton({open, toggleOpen}){
  const {category} = useContext(categoryValueContext)
    return (
        <Button onClick = {toggleOpen}> 
        {category} 
        <Arrow open = {open} />
        </Button>
    )
}