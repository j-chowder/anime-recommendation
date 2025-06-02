import { useContext } from 'react';
import { categoryValueContext } from '../../app/Context/CategoryValueContext';

export default function DropDownItemButton({children, toggleOpen}){
const {setInputValue} = useContext(categoryValueContext);

    const handleClick = () => {
        const value = "" + children
        setInputValue(value);
        console.log(value);
        toggleOpen();
    }

    return (
        <button onClick = {handleClick}>{children}</button>
    )

}