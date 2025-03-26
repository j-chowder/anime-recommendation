import {styled} from 'styled-components';
import InputBar from '../features/Search/InputBar.jsx'
import DropDown from '../features/DropDown/DropDown.jsx';
import TitleAndImage from '../features/HomepageHeader/TitleAndImage.jsx';
import Container from '../features/BackgroundGraphic/Watercolor.jsx';
import HeaderLine from '../features/Header/HeaderLine.jsx';
import CategoryValueProvider from './Context/CategoryValueContext.jsx';
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
    
    return(
    <>
    <HeaderWrapper>
        <TitleAndImage />
    </HeaderWrapper>
    <CategoryValueProvider>
        <HeaderLine />
    <Container>
     <Wrapper>
         <DropDown />
         <InputBar />
     </Wrapper>
    </Container>
    </CategoryValueProvider>
    </>
    )

}

export default App
