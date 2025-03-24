import {styled} from 'styled-components'

import { useTypewriter } from './TypewriterEffect'

const TypewriterEffect = styled.h2`
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  font-family: "lato";
  font-size: 35px;
  color: #D9B598;
  border-right: .15em solid orange; /* The typwriter cursor */
  margin-bottom:auto;
  white-space: nowrap; /* Keeps the content on a single line */
  margin-right: 0 auto; /* Gives that scrolling effect as the typing happens */
  letter-spacing: .05em; /* Adjust as needed */
  animation: 
    blink-caret .75s step-end infinite;
@keyframes blink-caret {
  from, to { border-color: transparent }
  50% { border-color: orange; }
}
`
export default function HeaderLine(){
let displayText = useTypewriter(["Recommend anime based on anime.", " genre.", " myAnimeList.", " anime."], 150);

const words = displayText.split(" ");

if(typeof(words[4]) != "undefined"){
    const text = "Recommend anime based on "
    const word = words[4];
 return (
    <TypewriterEffect>{text} <span style = {{color: '#2c6fbb', fontFamily: 'serif', textDecoration: 'underline black 1px' }}>{word}</span></TypewriterEffect>
 )
}
    return (
        <TypewriterEffect>{displayText}</TypewriterEffect>
    )
}
