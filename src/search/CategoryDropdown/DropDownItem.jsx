import {styled} from 'styled-components';
import DropDownItemButton from './DropDownItemButton';


const Item = styled.li`
padding-block:3px;
padding-inline: calc(var(--spacing) * 3);
hover: background-color:green;
border-top: 1px solid rgba(0,0,0,.2);
padding-top: 8px;
padding-bottom: 8px;
display:flex;
align-items:center;
`
export default function DropDownItem({children, toggleOpen}){

    return ( 
        <Item>
            <DropDownItemButton toggleOpen = {toggleOpen}>{children}</DropDownItemButton>
        </Item>
    )
}
