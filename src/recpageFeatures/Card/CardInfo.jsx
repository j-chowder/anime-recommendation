import styled from "styled-components";
import InfoFooter from "./CardInfoFooter";
import InfoContainer from "./CardInfoScroller";
const Info = styled.div`
 display: grid;
 grid-template-columns: 100%
 grid-template-rows: auto 44px;
 min-height: 0;
 min-width: 0;
`

export default function CardInfo(){
    return (
        <Info>
            <InfoContainer />
            <InfoFooter />
        </Info>
    )
}