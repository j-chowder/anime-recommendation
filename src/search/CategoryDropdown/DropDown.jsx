import DropDownButton from "./DropDownButton";
import DropDownContent from "./DropDownContent";
import DropDownList from "./DropDownList";
import DropDownItem from "./DropDownItem";
import {useState, useEffect, useRef} from 'react';

export default function DropDown(){
const [open, setOpen] = useState(false);
const ref = useRef(null);

useEffect(() => {
    function close(e) {
        if(!ref.current.contains(e.target)){
            setOpen(false);
        }
    }
    if(open){
        window.addEventListener("click", close);
    }
    return function removeListener() {
        window.removeEventListener("click", close);
    }
}, [open]);

function toggleOpen() {
    setOpen(!open);
}

    
return (
        <div style = {{position: 'relative'}} ref = {ref}>
        <DropDownButton open = {open} toggleOpen = {toggleOpen} />
        <DropDownContent open = {open}>
            <DropDownList>
                <DropDownItem toggleOpen = {toggleOpen}>Anime</DropDownItem>
                <DropDownItem toggleOpen = {toggleOpen}>Genre</DropDownItem>
                <DropDownItem toggleOpen = {toggleOpen}>User</DropDownItem>
            </DropDownList>
        </DropDownContent>
        </div>
        
)

}