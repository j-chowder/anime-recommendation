
export default function DropDownItemButton({children, setInputValue, toggleOpen}){

    const handleClick = () => {
        const value = "" + children
        setInputValue(value);
        toggleOpen();
    }

    return (
        <button onClick = {handleClick}>{children}</button>
    )

}