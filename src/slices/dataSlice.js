import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getPokemonDetails } from "@utils/pokemonApi";
import { consultApiData } from '@utils/pokemonApi';
import { handleSetLoading } from "@slices/uiSlice";

const initialState = {
    pokemons : [],
    searchText: "",
}

//Consulta a la Api con createAsyncThunk
const fetchPokemonsWidthDetails = createAsyncThunk(
    'data/fetchPokemonsWidthDetails',
    async (_, {dispatch} ) => {
        const axiosRest = consultApiData(); 

        axiosRest.then(result => {
            const pokemonUrl = result.data.results;
         
            //Debemos extraer la lista de urls de cada pokemon
            Promise.all(pokemonUrl.map((item)=> {
                return getPokemonDetails(item.url)
            }))
            .then(rest => {
                dispatch(handleSetPokemons(rest));  
                dispatch(handleSetLoading(false));
            });   
        })
        .catch(e => console.log(e))     
    }
);
//Se crea un slice con redux toolkit
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
            handleSetSearch: (state, action) => {
               state.searchText = action.payload; 
            }
        },
    }
);

//Desestructurando las acciones
const {
    handleSetPokemons,
    handleSetAddedToFavorite,
    handleSetSearch
} = dataSlice.actions;
//Obteniedo el reducer
const dataReducer = dataSlice.reducer;

export {
    dataReducer, 
    handleSetPokemons, 
    handleSetAddedToFavorite, 
    fetchPokemonsWidthDetails,
    handleSetSearch,
}

