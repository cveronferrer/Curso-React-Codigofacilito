import frameworksList from './items';
import ListView from './ListView';
import { useState } from 'react';

//Componentes de presentacion y componentes contenedores

function List() {
    let [items, setItems] = useState(frameworksList);

    function  filterItems(searchPattern){
        if (searchPattern === '') {
            setItems(frameworksList)
        } else {
            let newItems = filterItemsBySearchPatterns(searchPattern);
            setItems(newItems);
        }
    }

    function filterItemsBySearchPatterns(searchPattern) {
        let filterItems= frameworksList.map( item => item.toLowerCase().includes(searchPattern.toLowerCase()) ? item : null)
        return filterItems;

    }


    return(
        <ListView elements={items} funcFilterItems={filterItems}/>
    )
}

export default List;