import {styled} from 'styled-components'

const TitleText = styled.h1`
font-family: 'Inter', 'Montserrat';
`
export default function Title({children}){
    return(
     <TitleText>{children}</TitleText>
    )
    
}