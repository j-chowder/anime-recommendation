import { useState } from 'react';
import {styled} from 'styled-components';
import Picture2 from '../assets/Picture2.png';
import InputBar from '../features/Search/InputBar.jsx'
import DropDown from '../features/DropDown/DropDown.jsx';

const Wrapper = styled.div`
 display:flex;
 flex-direction:column;
 align-items:center;
 justify-content:center;
 gap:8px;
 min-width:800px;
`
const Image = styled.img`
border:solid;
width:100px;
height:auto;
`

function App() {
    const [value, setValue] = useState('-Select-');
    const data = useActionData()
    function setInputValue(val) {
        setValue(val);
    }

    return(
        <Wrapper>
         <DropDown value = {value} setInputValue={setInputValue} />
         <InputBar value = {value} />
         <Image src = {Picture2} alt = "none" />
        </Wrapper>
    )

}

export default App
