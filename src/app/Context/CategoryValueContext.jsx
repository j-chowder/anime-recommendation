import {createContext, useState} from 'react';


export const categoryValueContext = createContext({
    category: '-Select-',
    setInputValue: () => {},
})

export default function CategoryValueProvider({children}){
    const [category, setCategory] = useState('-Select-');

    const setInputValue = (val) => {
        setCategory(val);
    }
    return (
        <categoryValueContext.Provider value = {{ category, setInputValue }}>
            {children}
        </categoryValueContext.Provider>
    )
}

