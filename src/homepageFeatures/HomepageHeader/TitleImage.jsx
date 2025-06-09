import {styled} from 'styled-components'
import HomeImage from "../../assets/HomeImage.png"

const Image = styled.img`
border-top:solid; 
border-bottom:solid; 
width: 700px; 
height: auto;
`
export default function TitleImage(){
    return (
      <Image src = {HomeImage} />
    )
    
}