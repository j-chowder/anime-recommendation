import * as React from 'react'
import styled from 'styled-components'
import { useGenres } from '../search/APIs/useGenre'

const Wrapper = styled.span`
 font-size: 2.5rem;
 font-family: Montserrat, Inter, 'Times New Roman';
 margin: 5px;
 color: #a9957B;
`
const CategoryWrapper = styled.span`
 color: #564c4D;
`
const SearchWrapper = styled.span`
 color: rgb(44, 111, 187);
`

export default function RecText({category, search}: {category: string, search: string}){

    let cat = category

    if(cat === 'genre'){
     const {genres, loading, error} = useGenres();
        if (loading) return
        if (error) return <p>A network error was encountered</p>;

        const possibleGenres = genres as Array<string>

        let count = 1;
        let input = search;
        let index = input.indexOf(" ");
        let inputGenres: Array<string> = []
        while(index >= 0){  // looking for spaces to parse words
            while(!(possibleGenres.includes(input.substring(0, index)))){ // case when genre = two or more words. i.e. Slice of Life
                console.log(input)
                const prevIndex = index
                console.log(prevIndex, input.indexOf(" ", prevIndex))
                index = input.indexOf(" ", prevIndex + 1);
                if(index === -1){
                    break;
                }
            }
            if(index === -1){
                inputGenres.push(input.substring(0))
                break; 
            }
            inputGenres.push(input.substring(0, index))
            input = input.substring(index + 1)
            count++;
            index = input.indexOf(" ");
            if(index === -1){
                inputGenres.push(input.substring(0))
            }
        }
        if(count > 1){
            cat = 'genres'
            search = inputGenres.join(', ')
        }

        search = search.toLowerCase()
    }
    return (
        <>
        <Wrapper>
            Recommended animes for <CategoryWrapper>{cat} </CategoryWrapper> - <SearchWrapper>{search}</SearchWrapper>. 
        </Wrapper>
        </>
    )
}