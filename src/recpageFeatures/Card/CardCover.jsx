import styled from "styled-components";
import CardTitles from "./CardTitles";
const Cover = styled.div`
 cursor: pointer;
 display: flex;
 flex-direction: column;
 justify-content: flex-end;
 position: relative;
 z-index: 10;
`
const Image = styled.img`
 object-fit: cover;
 object-position: center;
 overflow-clip-margin: context-box;
 position: absolute;
 width: 100%;
 height: 100%;
`
const Overlay = styled.div`
    display:block;
    object-fit: cover;
    background-color: rgba(0,0,0,0.8);
    font-size: 1.4rem;
    position: relative;
    max-width: 185px;
    width: 100%;
    font-weight: 600;
`

export default function CardCover(){
    return (
        <Cover>
            <Image src = 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx149118-AOQb0xuTssGl.jpg'></Image>
            <Overlay>
                <CardTitles titles = {["Fire Force asrt ars tars tarst", 'enen no shouboutai', "炎炎ノ消防隊"]}></CardTitles>
            </Overlay>
        </Cover>
    )
}