import {styled} from 'styled-components'
import './styles.css'

const Wrapper = styled.div`
background-color:transparent;
width:860px;
background-size:cover;
height:800px;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`

export default function Container({children}){

    return (
        <Wrapper className = "div">
            {children}
        </Wrapper>
    )
}

