import {styled} from 'styled-components';

const Button = styled.button`
 border: solid;
    border-width:1px;
    border-radius: 3px;
    border-left:0;
 cursor: pointer;
  height: 38px;
  padding:1px;
  background-color: papayawhip;
  display:flex;
  justify-content:center;
  align-items:center;
  border-radius:0;
  border-top-right-radius:6px;
  border-bottom-right-radius:6px;
`;

export default function SearchButton({children}){
   return (
      <Button>{children}</Button>
   )
}