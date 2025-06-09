import * as React from 'react'

const favoriteContext = React.createContext({
    favoritedCount: 0,
    incFavoritedCount: () => {},
    decFavoritedCount: () => {},
})


export default function FavoriteContextProvider({children}: {children: any}){
    const [favoritedCount, setFavoritedCount] = React.useState(0);

    const incFavoritedCount = () => {
        setFavoritedCount((prevCount) => prevCount + 1);
        console.log(`count: ${favoritedCount}`)
    }

    const decFavoritedCount = () => {
        setFavoritedCount((prevCount) => prevCount - 1);
        console.log(`count: ${favoritedCount}`)
    }

    return ( 
        <favoriteContext.Provider value = {{favoritedCount, incFavoritedCount, decFavoritedCount}}>
            {children}
        </favoriteContext.Provider>
    )
}

export function useFavoriteContext() {
    const context = React.useContext(favoriteContext);
    if(!context){
        throw new Error(
            "useFavoriteContext must be used within a favoriteContextProvider"
        );
    }
    return context;
}