import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Search } from '@components/Search';
import { CardsContainer } from '@components/CardsContainer';
import { PokemonCard } from '@components/PokemonCard';
import { Loading } from '@components/Loading';
/* import { consultApiData } from '@utils/pokemonApi';
import { handleSetPokemonsWithDetails } from '@utils/pokemonRedux'; */
import { fetchPokemonsWidthDetails } from '../slices/dataSlice';
import { useFilteredData } from '../hooks/useFilteredData';
/* import { handleSetPokemons } from '@utils/pokemonRedux';
import { getPokemonDetails } from '@utils/pokemonApi'; */


function App() {
    //Hook donde se filtran los datos según la búsqueda actual
    const {filteredPokemons} = useFilteredData();
    const loading = useSelector(state => state.ui.loading);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchPokemonsWidthDetails());     
    },[]);

    return (
        <>
            <Search filteredPokemons={filteredPokemons} />   
            {loading && <Loading/>}     
            {!loading && <CardsContainer>
                {filteredPokemons.map((pokemon)=><PokemonCard key={pokemon.name} pokemon={pokemon} />)}
            </CardsContainer>}
        </>
    )
}

export {App};