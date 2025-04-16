import {styled} from 'styled-components'

const Row = styled.button`
cursor:pointer;
text-align:start;
margin: 0;
background-color:#D3D3D3;
font-family: 'Georgia';
outline: none;
box-shadow:none;
border-bottom: solid gray 0.1px;
& :focus{
outline:none;
}
`

export default function DropdownRow({children, autoComplete}){
    function handleClick(){
        const value = "" + children;
        console.log(`handling autoComplete ${value}`)
        autoComplete(value);
    }
    return (
        <Row 
        onClick = {handleClick}>
            {children}
        </Row>
    )
}