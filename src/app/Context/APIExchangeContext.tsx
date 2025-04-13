import { createContext, useState} from "react";
import * as React from "react";

interface AnimeObject {
    'name': string,
    'image': string
}
type Anime = AnimeObject | null

interface ExchangeContextType {
    request: string;
    setAnimes: (animes: Anime[]) => void;
    setGetter: (url: string) => void;
    response: Anime[] | null;
}

export const exchangeContext = createContext<ExchangeContextType>({
    request: '',
    setAnimes: (animes) => {},
    setGetter: (url) => {},
    response: null  
})

export default function ExchangeContextProvider({children}: {children: any}){
    const [request, setRequest] = useState<string>('');

    const [response, setResponse] = useState<null | Anime[]>(null);
    
    const setAnimes = (animes: Anime[]) => {
        console.log(`did it! ${animes}`)
        setResponse(animes)
    }

    const setGetter = (url: string) => {
        console.log(`set getter! ${url}`)
        setRequest(url)
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