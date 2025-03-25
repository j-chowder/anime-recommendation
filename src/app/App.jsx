import { useState } from 'react';
import {styled} from 'styled-components';
import InputBar from '../features/Search/InputBar.jsx'
import DropDown from '../features/DropDown/DropDown.jsx';
import TitleAndImage from '../features/HomepageHeader/TitleAndImage.jsx';
import Container from '../features/BackgroundGraphic/Watercolor.jsx';
import HeaderLine from '../features/Header/HeaderLine.jsx';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
 display:flex;
 flex-direction:column;
 align-items:center;
 justify-content:center;
 gap:8px;
 min-width:800px;
`
const HeaderWrapper = styled.div`
display:flex; 
justify-content: center; 
align-items:center; 
margin-top:20px;
`

function App() {
    const [value, setValue] = useState('-Select-');
    function setInputValue(val) {
        setValue(val);
    }
    return(
        <>
        <HeaderWrapper>
           <TitleAndImage />
        </HeaderWrapper>
        <HeaderLine />
    <Container>
     <Wrapper>
         <DropDown value = {value} setInputValue={setInputValue} />
         <InputBar value = {value} />
         <Link to="/test">Test Page</Link>
     </Wrapper>
    </Container>
        </>
    )

}

export default App
