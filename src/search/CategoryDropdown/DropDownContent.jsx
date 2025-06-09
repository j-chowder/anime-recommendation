import {styled} from 'styled-components';

export const Content = styled.div`
   position:absolute;
   border-radius: 10px;
   border-top-left-radius: 4px;
   border:solid;
   border-color:gray;
   background-color:white;
   z-index:20;
   font-family: Garamond;
   font-size: 1rem;
`

export default function DropDownContent({open, children}){
  if(open){
    return (
        <Content style = {{boxShadow: 
            '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)'
        }}>{children}</Content>
    )
  }
  else{
    return (
        <Content style = {{
            display:'none'
        }} />
        
    )
  }
 
}