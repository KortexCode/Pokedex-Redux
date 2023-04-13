import { useMemo } from 'react';
import { useSelector } from 'react-redux';

function useFilteredData(){
    const pokemons = useSelector(state => state.data.pokemons);
    const searchText = useSelector(state => state.data.searchText); 
    //Filtramos por búsqueda
    const filteredPokemons = useMemo(()=>
        //Se regresan los pokemon que cumplan las condiciones de búsqueda
        pokemons.filter(pokemon => {
            //Si la consulta coincide por nombres de pokemon
            const searchNameValid = pokemon.name.toLowerCase().includes(searchText.toLowerCase());
            if(searchNameValid){
                return searchNameValid;
            }
            //De lo contrario la consulta regresada será por tipos de pokmeon
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