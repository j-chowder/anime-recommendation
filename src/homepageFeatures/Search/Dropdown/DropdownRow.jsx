import {styled} from 'styled-components'

const Row = styled.button`
cursor:pointer;
text-align:start;
margin: 2px 0;
background-color:#D3D3D3;
font-family: 'Georgia';
outline: none;
box-shadow:none;
& :focus{
outline:none;
}
`

export default function DropdownRow({children, handleChange}){
    function handleClick(){
        const value = "" + children;
        handleChange(value);
    }
    return (
        <Row 
        onClick = {handleClick}>
            {children}
        </Row>
    )
}