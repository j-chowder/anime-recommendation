import { useGenres } from "../APIs/useGenre";
import {styled} from 'styled-components'
import DropdownRow from "./DropdownRow";
const Dropdown = styled.div`
 background-color:#D3D3D3;
 display:flex;
 border-radius:10px;
 flex-direction:column;
 border: 1px solid gray;
 max-width:600px;
 width:100%;
 position:relative;
 :empty{
 border:none;
 }

 }
`
const Container = styled.div`
 position: absolute;
 display:flex;
 flex-direction:column;
 gap:0;
`


export default function SearchDropdown({query, autoComplete}){
    const {genres, loading, error} = useGenres();

    if (loading) return <p>Loading...</p>;
    if (error) return <p>A network error was encountered</p>;

    var input = query.toLowerCase();

    const inputArr = input.split(', ');
    const len = inputArr.length;

    console.log(`in: ${inputArr}, ${len}`)
    if(len > 1){ //  ensure autocomplete works with multiple genre searches.
      input = inputArr[len - 1];
      input = input.toLowerCase();
    }

    return(
    <Dropdown>
      <Container>
          {genres.filter((element) => {
            const genre = element.toLowerCase();
            return input && genre.startsWith(input) && genre !== input;
          })
          .slice(0,5)
          .map((genre) => 
            <DropdownRow key = {genre} autoComplete={autoComplete}>{genre}</DropdownRow>
          )}
      </Container>
    </Dropdown>
    )    
}