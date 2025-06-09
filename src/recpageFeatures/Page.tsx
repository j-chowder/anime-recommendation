import * as React from "react";
import { styled } from "styled-components";
import CardContainer from "./Card/CardContainer"
import Header from "./Header/Header"
import useAnimeData from "./API/GetData";
import RecErrorPage from "./ErrorPage/Error";
import { useParams } from "react-router-dom";
import FilterContextProvider from "../app/Context/FilterContext";
import { responseContext } from "../app/Context/ResponseContext";
import FilterResponse from "./FilterResponse";
import RecText from "./RecText";

const Container = styled.main`
 display:grid;
 grid-template-columns: repeat(auto-fit, minmax(370px, 1fr));
 grid-column-gap: 40px;
 grid-row-gap: 40px;
 max-width: 1200px;
 position: relative;
 margin: 0;
`

interface ContainsObject{
    'name': string,
    'similarity': number,
}
interface errorResponseObjectType{
    contains: ContainsObject[],
    fuzzy: ContainsObject[],
}

interface Anime {
    id: number,
    name: string,
    score: number,
    genres: string,
    image: string,
    english_name: string,
    other_name: string,
    synopsis: string,
}

type Category = '-select-' | 'anime' | 'genre' | 'user'

export default function Page(){
    const {category, search} = useParams<{category: Category, search: string}>()
    const {response, loading, error} = useAnimeData(category as Category, search as string)
    const [cardcount, setCardCount] = React.useState<number>(30);

    React.useEffect(() => {
        const handleScroll = () => {
            const scrollElm = document.scrollingElement 
            if(scrollElm !== null){
                if (window.innerHeight + document.documentElement.scrollTop === scrollElm.scrollHeight) {
                    const count = cardcount + 30;
                    if(count > 100){
                        setCardCount(100);
                    }
                    else{
                        setCardCount(count);
                    }
                }
            }
        
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [cardcount]);
    
    if (loading) return <p>Loading...</p>;
    if(typeof(response) == 'number'){ // case where response == -1 (when user animelist is empty)
        return <RecErrorPage alt = {response} />
    }

    if("fuzzy" in (response as errorResponseObjectType)){
        return <RecErrorPage alt = {response as errorResponseObjectType} />
    }

    const animes: Anime[] = response as Anime[]

    if (error || animes.length == 0) return <RecErrorPage />;
    



    return (
        <>
         <FilterContextProvider>
          <Header />
          <RecText category = {category as Category} search = {search as string}/>
          <responseContext.Provider value = {{animes}}>
           <Container>
            {animes.slice(0, cardcount)
            .map((anime, index) => 
               (<CardContainer 
                index = {index}
                key = {index}
                />)
            )}
           </Container>
            <FilterResponse />
          </responseContext.Provider>
         </FilterContextProvider>
        </>
    )
}