import * as React from 'react';
import { createContext, useState } from 'react';

interface filterContextType{
    filter: boolean,
    toggleFilter: () => void; 
}
export const filterContext = createContext<filterContextType>({
    filter: false,
    toggleFilter: () => {},
})

export default function FilterContextProvider({children}: {children: any}){
    const [filter, setFilter] = useState<boolean>(false);

    const toggleFilter = () => {
        setFilter(!filter);
    }
    
    return (
        <filterContext.Provider value = {{filter, toggleFilter}}>
            {children}
        </filterContext.Provider>
    )
} 