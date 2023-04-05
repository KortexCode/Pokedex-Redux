import React, { useEffect } from 'react';
import { Search } from '../components/Search';
import { CardsContainer } from '@components/CardsContainer';
import { PokemonCard } from '@components/PokemonCard';
import { consultApiData } from '@utils/pokemonApi';
import { handleSetPokemons } from '@utils/pokemonRedux';
import { getPokemonDetails } from '@utils/pokemonApi';
import { useDispatch, useSelector } from 'react-redux';
import { handleSetPokemonsWithDetails } from '../utils/pokemonRedux';

function App() {

    const pokemons = useSelector(state => state.pokemons);
    const dispatch = useDispatch()

    useEffect(()=>{
        
        const axiosRest = consultApiData();

        axiosRest.then(result => 
            dispatch(handleSetPokemonsWithDetails(result.data.results)))
        .catch(e => console.log(e))
        
    },[]);


    return (
        <>
            <Search/>
            <CardsContainer>
                {pokemons.map((pokemon)=><PokemonCard key={pokemon.name} pokemon={pokemon} />)}
            </CardsContainer>
        </>
    )
}

export {App};