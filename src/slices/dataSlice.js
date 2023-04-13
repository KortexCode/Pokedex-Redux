import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getPokemonDetails } from "@utils/pokemonApi";
import { consultApiData } from '@utils/pokemonApi';
import { handleSetLoading } from "@slices/uiSlice";

const initialState = {
    pokemons : [],
    searchText: "",
    pokemonDetail: {},
    openDetailMenu: false,
    toggleFavoriteMenu: false,
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
                console.log("added", action.payload)
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
                    console.log("en que estado", propFavorite)
                    state.pokemons[pokemonIndex].favorite = !propFavorite;
                    //Agregamos o eliminamos de la lista si el pokemon tiene falso o verdadero
                    //su propiedad favoritos
                   
                    if(!propFavorite){
                        console.log("entró a meter")
                        state.addedToFavorites.push(state.pokemons[pokemonIndex]);
                    }else{
                        state.addedToFavorites.forEach((addeds, index)=>{
                            if(addeds.id == state.pokemons[pokemonIndex].id){
                                state.addedToFavorites.splice(index, 1);
                            }
                        });   
                    }
                    
                }
            },
            handleSetSearch: (state, action) => {
               state.searchText = action.payload; 
            },
            handleSetOpenDetailView: (state, action) => {
                state.pokemonDetail = action.payload;
                state.openDetailMenu = !state.openDetail;
            },
            handleSetCloseDetailView: (state, action) => {
               state.openDetailMenu = action.payload;
            },
            handleSetToggleFavoriteMenu: (state, action) => {
                state.toggleFavoriteMenu = !state.toggleFavoriteMenu    
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
    handleSetToggleFavoriteMenu,
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
    handleSetToggleFavoriteMenu,
}

