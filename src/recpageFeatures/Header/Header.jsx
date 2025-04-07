import styled from "styled-components";
import InputBar from "../../homepageFeatures/Search/InputBar";
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
            <SearchContainer>
              <InputBar defValue = {"Search something else..."} />
            </SearchContainer>
        </Container>
    )
}

