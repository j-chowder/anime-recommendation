import {styled} from 'styled-components'

export const TitleText = styled.h1`
font-family: 'Inter', 'Montserrat';
`
export default function Title({children}){
    return(
     <TitleText>{children}</TitleText>
    )
    
}