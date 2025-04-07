import styled from "styled-components";

const TitleContainer = styled.div`
 display:flex;
 flex-direction: column;
 justify-content:start;
 color: white;
 padding:5px;
`
const MainTitle = styled.span`
 font-size: 1rem;
 font-family: 'Inter'
`
const RomajiTitle = styled.span`
 font-size: 8px;
 color: #D3D3D3;
 padding:0;
 margin:0;
`
const JapaneseTitle = styled.span`
 font-size: 8px;
 font-family: "Meiryo";
 color: #D3D3D3;
 padding:0;
 margin:0;
`
const SubTitleContainer = styled.div`
 width: 170px;
 display:flex;
 flex-direction:column;
 justify-content:start;
 gap: 1px;
`
export default function CardTitles({titles}){
    return (
        <TitleContainer>
         <MainTitle>{titles[0]}</MainTitle>

         <SubTitleContainer> 
         {typeof(titles[1]) !== 'undefined' &&
          <RomajiTitle>{titles[1]}</RomajiTitle>
         }
         {typeof(titles[2]) !== 'undefined' && 
          <JapaneseTitle>{titles[2]}</JapaneseTitle>
         }
         </SubTitleContainer>
         
        </ TitleContainer>
    )
}