import {styled} from 'styled-components'

const List = styled.ul`
  color: var(--color-amber-700);
  border-color: rgba(229, 231, 235, var(--tw-divide-opacity));
  list-style-type:none;
  margin:0px;
  padding:5px;
`

export default function DropDownList({toggleOpen, children}){
    return (
        <List onClick = {toggleOpen}>{children}</List>
    )
}