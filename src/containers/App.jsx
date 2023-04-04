import React, { useEffect } from 'react';
import { Search } from '../components/Search';
import { CardsContainer } from '../components/CardsContainer';
import { PokemonCard } from '@components/PokemonCard';
import { consultApiData } from '../utils/pokemonApi';
import { handleSetPokemons } from '../utils/pokemonRedux';
import { useDispatch, useSelector } from 'react-redux';

function App() {

    const pokemons = useSelector(state => state.pokemons);
    const dispatch = useDispatch()

    useEffect(()=>{
        
        const result = consultApiData();
        result().then(result => dispatch(handleSetPokemons(result.data.results)))
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