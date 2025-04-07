import {styled} from 'styled-components';
import InputBar from '../homepageFeatures/Search/InputBar.jsx'
import DropDown from '../homepageFeatures/DropDown/DropDown.jsx';
import TitleAndImage from '../homepageFeatures/HomepageHeader/TitleAndImage.jsx';
import Container from '../homepageFeatures/BackgroundGraphic/Watercolor.jsx';
import HeaderLine from '../homepageFeatures/Header/HeaderLine.jsx';
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
