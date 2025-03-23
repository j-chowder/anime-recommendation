import { useState } from 'react';
import {styled} from 'styled-components';

const Input = styled.input`
    padding: 0.5em;
    margin: 0.5em;
    color: black;
    background: papayawhip;
    border: solid;
    border-width:1px;
    border-radius: 3px;
`;

export default function InputBar(){
    const [inputValue, setInputValue] = useState('');

    return (
        <Input />
    )
    


}