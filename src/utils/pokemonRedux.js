//Estado inicial
const initialState = {
    pokemons : [],
}
//Tipos de acciones
const actionType = {
    setPokemons : "Set Pokemons",
}
//Objeto reductor
const objectReducer = (state, payload) => ({
    [actionType.setPokemons] : {
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

export {pokemonsReducer, handleSetPokemons}



