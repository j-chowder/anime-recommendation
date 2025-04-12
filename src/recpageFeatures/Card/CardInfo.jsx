import styled from "styled-components";
import InfoBody from "./CardInfoBody";
import InfoFooter from "./CardInfoFooter";
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
            <InfoBody />
            <InfoFooter />
        </Info>
    )
}