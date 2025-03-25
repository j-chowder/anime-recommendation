import {styled} from 'styled-components'

const Image = styled.img`
border-top:solid; 
border-bottom:solid; 
width: 700px; 
height: auto;
`
export default function TitleImage(){
    return (
      <Image src = "./src/assets/Picture2.png" />
    )
    
}