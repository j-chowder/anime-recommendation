import {styled} from "styled-components"
import CardContainer from "./Card/CardContainer"
const Container = styled.main`
 display:grid;
 grid-template-columns: repeat(auto-fit, minmax(370px, 1fr));
 grid-column-gap: 40px;
 grid-row-gap: 40px;
 max-width: 1200px;
 margin: 0;
`

export default function Page(){
    return (
        <>
        
         <Container>
            <CardContainer />
            <CardContainer />
            <CardContainer />
            <CardContainer />
            <CardContainer />
            <CardContainer />
            <CardContainer />
         </Container>
        </>
    )
}