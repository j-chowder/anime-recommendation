import {createContext, useState} from 'react';


export const categoryValueContext = createContext({
    category: '-Select-',
    setInputValue: () => {},
})

export default function CategoryValueProvider({children}){
    const [category, setCategory] = useState(() => {
        const saved = localStorage.getItem("category");
        return saved || "-Select-"; 
    });

    const setInputValue = (val) => {
        setCategory(val);

        localStorage.setItem("category", val);
    }
    return (
        <categoryValueContext.Provider value = {{ category, setInputValue }}>
            {children}
        </categoryValueContext.Provider>
    )
}

