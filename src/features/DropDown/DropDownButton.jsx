import {useState} from 'react';
import {styled} from 'styled-components';
import Arrow from './Arrow.jsx'
const Button = styled.button`
  border-radius: 4px;
  font-weight:bold; 
  color:white; 
  background-color:gray;
  display:flex;
  align-items:center; 
  gap:15px;
`

export default function DropDownButton({open, toggleOpen, value}){
  
    return (
        <Button onClick = {toggleOpen}> 
        {value} 
        <Arrow open = {open} />
        </Button>
    )
}