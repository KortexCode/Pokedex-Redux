import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Search } from '@components/Search';
import { CardsContainer } from '@components/CardsContainer';
import { PokemonCard } from '@components/PokemonCard';
import { Loading } from '@components/Loading';
import { fetchPokemonsWidthDetails } from '@slices/dataSlice';
import { useFilteredData } from '../hooks/useFilteredData';
import { PokemonCardDetail } from '@components/PokemonCardDetail';
import { Navigation } from '@components/Navigation';
import { PokeGirlImg } from '@components/PokeGirlImg';
import { AddedTofavoritesMenu } from '@components/AddedToFavoritesMenu';
import logo from '@images/logo.png'

function App() {
    //Hook donde se filtran los datos según la búsqueda actual
    const {filteredPokemons} = useFilteredData();
    const pokemonDetail = useSelector(state => state.data.pokemonDetail);
    const openDetail = useSelector(state => state.data.openDetail);
    const loading = useSelector(state => state.ui.loading);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchPokemonsWidthDetails("pokemon?limit=151"));     
    },[]);



    return (
        <>
            <Navigation/>
            <main>
                <AddedTofavoritesMenu/>
                <PokeGirlImg/>
                <div className='w-full mt-20 sm:flex justify-center items-center hidden'>
                    <h1 className='me-2 text-4xl font-bold text-red-200'>
                        PokeRedux
                    </h1>
                    <img className=' w-10 h-10 me-3 text-center' 
                        src={logo} alt="Logo" 
                    />
                </div> 
                <Search filteredPokemons={filteredPokemons} />   
                {loading && <Loading/>}     
                {!loading && <CardsContainer>
                    {filteredPokemons.map((pokemon)=><PokemonCard key={pokemon.name} pokemon={pokemon} />)}
                </CardsContainer>}
                {openDetail && 
                    <div className='w-full h-full flex items-center
                    justify-center fixed top-0 z-10 bg-detailShadow'>
                        <PokemonCardDetail/>
                    </div>      
                }
            </main>
        </>
    )
}

export {App};