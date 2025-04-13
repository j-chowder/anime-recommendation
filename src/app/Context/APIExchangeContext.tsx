import { createContext, useState} from "react";
import * as React from "react";

interface AnimeObject {
    'name': string,
    'image': string
}
type Anime = AnimeObject | null

type Category = 'Anime' | 'Genre' | 'User' | '-Select-';

interface requestObject {
    "category": Category,
    "value": string | undefined,
}
interface ExchangeContextType {
    request: requestObject | undefined;
    setAnimes: (animes: Anime[]) => void;
    setGetter: (category: Category, value: string) => void;
    response: Anime[] | null;
}

export const exchangeContext = createContext<ExchangeContextType>({
    request: undefined,
    setAnimes: (animes) => {},
    setGetter: (category: Category, value: string) => {},
    response: null  
})

export default function ExchangeContextProvider({children}: {children: any}){
    const [request, setRequest] = useState<requestObject | undefined>(undefined);

    const [response, setResponse] = useState<null | Anime[]>(null);
    
    const setAnimes = (animes: Anime[]) => {
        console.log(`did it! ${animes}`)
        setResponse(animes)
    }

    const setGetter = (category: Category, value: string) => {
        console.log(`set getter! category: ${category}, value: ${value} `)
        if(category == "-Select-" || value === undefined){
            console.log('uh oh');
            return; 
        }
        setRequest({'category': category, 'value': value})
    }

    return (
        <exchangeContext.Provider value = {{ response, request, setAnimes, setGetter}}>
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