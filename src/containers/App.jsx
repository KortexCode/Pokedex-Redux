import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Search } from '@components/Search';
import { CardsContainer } from '@components/CardsContainer';
import { PokemonCard } from '@components/PokemonCard';
import { Loading } from '@components/Loading';
import { consultApiData } from '@utils/pokemonApi';
import { handleSetPokemonsWithDetails } from '@utils/pokemonRedux';
/* import { handleSetPokemons } from '@utils/pokemonRedux';
import { getPokemonDetails } from '@utils/pokemonApi'; */


function App() {

    const pokemons = useSelector(state => state.data.pokemons);
    const loading = useSelector(state => state.ui.loading);
    const dispatch = useDispatch()

    const a = {
        b: "1",
    }
    const b = {...a}
    console.log("compa", b == a)

    useEffect(()=>{
        
        const axiosRest = consultApiData();

        axiosRest.then(result => {
            dispatch(handleSetPokemonsWithDetails(result.data.results));
        })
        .catch(e => console.log(e))
        
    },[]);

    return (
        <>
            <Search/>   
            {loading && <Loading/>}     
            {!loading && <CardsContainer>
                {pokemons.map((pokemon)=><PokemonCard key={pokemon.name} pokemon={pokemon} />)}
            </CardsContainer>}
        </>
    )
}

export {App};