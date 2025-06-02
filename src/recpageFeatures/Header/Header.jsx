import styled from "styled-components";
import FilterButton from "./FilterButton/FilterButton";
import InputBar from "../../search/InputBar";
import Search from "../../search/Search";
import CategoryValueProvider from "../../app/Context/CategoryValueContext";
const Container = styled.div`
 background-color: #DECFAC;
 color: #D3D3D3;
 height: 150px;
 width: 100%;
 padding-top: 20px;
 margin-bottom: 20px;
 display:flex;
`
const SearchContainer = styled.div`
display:flex;
flex-direction:column;
margin: 0 auto;
margin-bottom: 5px;
margin-top:auto;
`


export default function Header(){
    return (
        
        <Container>
            <CategoryValueProvider>
             <Search defValue="Search something else..." />
            </CategoryValueProvider>
            
            <FilterButton></FilterButton>
        </Container>
        
    )
}

