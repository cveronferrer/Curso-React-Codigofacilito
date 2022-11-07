import { createContext, useState } from "react";

 export const SearchContext = createContext({message: 'Hola mundo'});

 export function SearchProvider({children}){
    let [search, setSearch] = useState();
    return (
        <SearchContext.Provider value={{search: search, setSearch: setSearch}}>
            { children }
        </SearchContext.Provider>
    )
 }

