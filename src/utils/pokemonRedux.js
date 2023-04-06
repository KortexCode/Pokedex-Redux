import { getPokemonDetails } from "@utils/pokemonApi";
import { handleSetLoading } from "@utils/uiRedux";

//Estado inicial
const initialState = {
    pokemons : [],
}
//Tipos de acciones
const actionType = {
    setPokemons : "Set Pokemons",
    setAddedToFavorites: "Add to favorites"
}
//Objeto reductor
const objectReducer = (state, payload) => ({
    [actionType.setPokemons] : {
        ...state,
        pokemons: payload,
    },
    [actionType.setAddedToFavorites] : {
        ...state,
        pokemons: payload,
    }
})
//Función reductora la cual devuelve el estado actualizado
function pokemonsReducer(state = initialState, action){
    return objectReducer(state, action.payload)[action.type] || state;
}
//Acciones creadoras
const handleSetPokemons = (payload)=>(
    {
        type :actionType.setPokemons,
        payload,
    }
)
const handleSetPokemonsWithDetails = (pokemons = []) => (dispatch) => {
    //Debemos extraer la lista de urls de cada pokemon
    Promise.all(pokemons.map((item)=> {
        return getPokemonDetails(item.url)
    }))
    .then(rest => {
        dispatch(handleSetLoading(false));
        dispatch(handleSetPokemons(rest));  
    });   
}
const handleSetAddedToFavorite =(payload) =>(  
    {
        type :actionType.setAddedToFavorites,
        payload,
    }
)

export {
    pokemonsReducer, 
    handleSetPokemons, 
    handleSetPokemonsWithDetails,
    handleSetAddedToFavorite,
}



