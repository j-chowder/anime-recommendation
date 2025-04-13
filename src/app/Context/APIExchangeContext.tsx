import { createContext, useState} from "react";
import * as React from "react";

interface AnimeObject {
    'name': string,
    'image': string
}
type Anime = AnimeObject | null

type Category = 'anime' | 'genre' | 'user' | '-select-';

interface requestObject {
    "category": Category,
    "value": string | undefined,
}
interface ExchangeContextType {
    request: requestObject | undefined;
    setGetter: (category: Category, value: string) => void;
}

export const exchangeContext = createContext<ExchangeContextType>({
    request: undefined,
    setGetter: (category: Category, value: string) => {},
})

export default function ExchangeContextProvider({children}: {children: any}){
    const [request, setRequest] = useState<requestObject | undefined>(undefined);

    const setGetter = (category: Category, value: string) => {
        console.log(`set getter! category: ${category}, value: ${value} `)
        if(category == "-select-" || value === undefined){
            console.log('uh oh');
            return; 
        }
        setRequest({'category': category, 'value': value})
    }

    return (
        <exchangeContext.Provider value = {{ request, setGetter}}>
            {children}
        </exchangeContext.Provider>
    )
}

// export default function exchangeContextLayout({children}: {children: any}){
//     return (
//         <ExchangeContextProvider>
//             {children}
//         </ExchangeContextProvider>
//     )
// }