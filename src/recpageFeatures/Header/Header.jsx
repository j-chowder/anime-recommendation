import styled from "styled-components";
import FilterButton from "./FilterButton";
import InputBar from "../../search/InputBar";
import Search from "../../search/Search";
import CategoryValueProvider from "../../app/Context/CategoryValueContext";
import Home from "../../home_icon/Home";
import Github from './Github'

const HeaderContainer = styled.div`
 background-color: #DECFAC;
 color: #D3D3D3;
 height: 150px;
 width: 100%;
 margin-bottom: 20px;
 display:flex;
 flex-direction: column;
 top: 0;
 z-index: 100%;
`
const HomeWrapper = styled.div`
 margin-left: 5px;
 margin-top: 5px;
 display: flex;
 align-items: start; 
 gap: 4px;
 flex-direction: row;
`

export default function Header(){
    return (
        
        <HeaderContainer>
            <HomeWrapper>
                <Home />
                <FilterButton />
                <Github />
            </HomeWrapper>

            <CategoryValueProvider>
             <Search defValue="Search something else..." />
            </CategoryValueProvider>
            
            
        </HeaderContainer>
        
    )
}

