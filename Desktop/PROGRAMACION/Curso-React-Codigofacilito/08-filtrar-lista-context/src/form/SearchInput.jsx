import { useContext } from "react";
import { SearchContext } from "../contexts/SearchContext";


function SearchInput(){
   const {setSearch} =  useContext(SearchContext);
   
   return(
    <input type='text' onChange={e => setSearch(e.target.value)} />
    )
}

export default SearchInput;