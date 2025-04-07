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
 :empty{
 border:none;
 }

 }
`


export default function SearchDropdown({query, handleChange}){
    const {genres, loading, error} = useGenres();

    if (loading) return <p>Loading...</p>;
    if (error) return <p>A network error was encountered</p>;

    return(
    <Dropdown>
          {genres.filter((element) => {
            const genre = element.toLowerCase();
            const input = query.toLowerCase();
            return input && genre.startsWith(input) && genre !== input
          })
          .slice(0,5)
          .map((genre) => 
            <DropdownRow key = {genre} handleChange={handleChange}>{genre}</DropdownRow>
          )}
        </Dropdown>
    )    
}