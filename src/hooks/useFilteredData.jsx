import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';

function useFilteredData(){
    const pokemons = useSelector(state => state.data.pokemons);
    const searchText = useSelector(state => state.data.searchText); 

    const filteredPokemons = useMemo(()=>
        pokemons.filter(pokemon => {
            return pokemon.types.some((item)=>{
                return item.type.name.toLowerCase().includes(searchText.toLowerCase())
            })
        }),[searchText, pokemons]
    );

    return {
        filteredPokemons,
    }
   
}

export { useFilteredData }