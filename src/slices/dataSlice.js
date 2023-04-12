import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getPokemonDetails } from "@utils/pokemonApi";
import { consultApiData } from '@utils/pokemonApi';
import { handleSetLoading } from "@slices/uiSlice";

const initialState = {
    pokemons : [],
    searchText: "",
    pokemonDetail: {},
    openDetail: false,
    addedToFavorites: [],
}

//Consulta a la Api con createAsyncThunk
const fetchPokemonsWidthDetails = createAsyncThunk(
    'data/fetchPokemonsWidthDetails',
    async (endPoint, {dispatch} ) => {
        const axiosRest = consultApiData(endPoint); 

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
                //Verificar si existe un pokemon en vista de detalles
                if(state.pokemonDetail){
                    //Sincronizar variable favorita
                    state.pokemonDetail.favorite = !state.pokemonDetail.favorite
                }
                //Cambiar estado favorito de la carta de pokemon elejida
                const pokemonIndex= state.pokemons.findIndex((item)=>{
                     return item.id == action.payload.id;
                })
                if(pokemonIndex >= 0){
                    const propFavorite = state.pokemons[pokemonIndex].favorite;
                    state.pokemons[pokemonIndex].favorite = !propFavorite;
                    //Agregamos o eliminamos de la lista si el pokemon tiene falso o verdadero
                    //su propiedad favoritos
                    if(state.pokemons[pokemonIndex].favorite){
                        state.addedToFavorites.push(state.pokemons[pokemonIndex]);
                    }else{
                        state.addedToFavorites.splice(pokemonIndex, 1);
                    }
                    
                }
            },
            handleSetSearch: (state, action) => {
               state.searchText = action.payload; 
            },
            handleSetOpenDetailView: (state, action) => {
                state.pokemonDetail = action.payload;
                state.openDetail = !state.openDetail;
            },
            handleSetCloseDetailView: (state, action) => {
               state.openDetail = action.payload;
            },

        },
    }
);

//Desestructurando las acciones
const {
    handleSetPokemons,
    handleSetAddedToFavorite,
    handleSetSearch,
    handleSetOpenDetailView,
    handleSetCloseDetailView,
} = dataSlice.actions;
//Obteniedo el reducer
const dataReducer = dataSlice.reducer;

export {
    dataReducer, 
    handleSetPokemons, 
    handleSetAddedToFavorite, 
    fetchPokemonsWidthDetails,
    handleSetSearch,
    handleSetOpenDetailView,
    handleSetCloseDetailView,
}

