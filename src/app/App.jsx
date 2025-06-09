import {styled} from 'styled-components';
import TitleAndImage from '../homepageFeatures/HomepageHeader/TitleAndImage.jsx';
import Container from '../homepageFeatures/BackgroundGraphic/Watercolor.jsx';
import HeaderLine from '../homepageFeatures/Header/HeaderLine.jsx';
import CategoryValueProvider from './Context/CategoryValueContext.jsx';
import Search from '../search/Search.js';

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
     <Search />
    </Container>
    </CategoryValueProvider>
    </>
    )

}

export default App
