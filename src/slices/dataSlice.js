import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    pokemons : [],
}

const dataSlice = createSlice(
    {
        name: "data",
        initialState,
        reducers: {
            handleSetPokemons: (state, action) => {
                state.pokemons = action.payload;
            },
            handleSetAddedToFavorite: (state, action) => {
                const pokemonIndex= state.pokemons.findIndex((item)=>{
                     return item.id == action.payload.id;
                })
                if(pokemonIndex >= 0){
                    const propFavorite = state.pokemons[pokemonIndex].favorite;   
                    state.pokemons[pokemonIndex].favorite = !propFavorite;
                }
            },
            /* handleSetPokemonsWithDetails: (state, action) => {

            } */
        },
    }
);

const {handleSetPokemons, handleSetAddedToFavorite} = dataSlice.actions;
const sliceReducer = dataSlice.reducer;

export {sliceReducer, handleSetPokemons, handleSetAddedToFavorite}



console.log("dataslcice", dataSlice)