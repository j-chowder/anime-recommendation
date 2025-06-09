import styled from "styled-components";

const TitleContainer = styled.div`
 display:flex;
 flex-direction: column;
 justify-content:start;
 color: white;
 padding:8px;
 padding-top:1px;
 padding-bottom: 0;
 margin-bottom:0;
`
const MainTitle = styled.span`
 font-size: .8rem;
 font-family: 'Inter';
 padding:0;
 margin:0;
`
const RomajiTitle = styled.span`
 font-size: .8rem;
 color: #D3D3D3;
 padding:0;
 margin:0;
`
const JapaneseTitle = styled.span`
 font-size: .8rem;
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
`
export default function CardTitles({titles}){
    return (
        <TitleContainer>
         <MainTitle>{titles[0]}</MainTitle>

         <SubTitleContainer> 
         {titles[1] !== 'UNKNOWN' && titles[1] !== titles[0] && 
          <RomajiTitle>{titles[1]}</RomajiTitle>
         }
         {titles[2] !== 'UNKNOWN' && titles[2].toLowerCase() !== titles[0].toLowerCase() && 
          <JapaneseTitle>{titles[2]}</JapaneseTitle>
         }
         </SubTitleContainer>
         
        </ TitleContainer>
    )
}