import {useState, useEffect, useMemo, useContext} from 'react';
import { categoryValueContext } from '../../app/Context/CategoryValueContext';

export const useTypewriter = (text, speed = 20) => {
const {category} = useContext(categoryValueContext);
    const [index, setIndex] = useState(0);
    const [done, setDone] = useState(false);
    const [arrayIndex, setArrayIndex] = useState(0);
    let displayText = "";
    displayText += useMemo(() => text[arrayIndex].slice(0, index), [index]);

    useEffect(() => {
      if(category != "-Select-"){
        setDone(null);
        return;
      }
      if(!done){
        if (index >= text[arrayIndex].length){
            setTimeout(() => {
                setDone(true);
            }, 5000);
            return;
          }
          
            const timeoutId = setTimeout(() => {
                setIndex(i => i + 1);
              }, speed);
          
              return () => {
                clearTimeout(timeoutId);
            };
      }  
      if(done){
        function handleArrayIndexChange(){
            if(arrayIndex === 3){
                setArrayIndex(1);
            }
            else{
                setArrayIndex(i => i + 1);
            }
          }
        if(text[arrayIndex].charAt(index - 1) === " "){
            setTimeout(() => {
                handleArrayIndexChange();
                setDone(false);
                setIndex(0);
            }, speed);
            return;
        }
        const timeoutId = setTimeout(() => {
            setIndex(i => i - 1);
        }, speed + 50);

        return () => {
            clearTimeout(timeoutId);
        };
      }
     
    }, [index, text, speed]);

    if(done === null){
      return `Recommend anime based on ${category.toLowerCase()}.`
    }

    if(arrayIndex >= 1){
        return `Recommend anime based on${displayText}`
    }

    return displayText;
  
  };

  
   
  
  
