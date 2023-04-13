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
import { PokemonAppTitule } from '@components/PokemonAppTitule';


function App() {
    //Hook donde se filtran los datos según la búsqueda actual
    const {filteredPokemons} = useFilteredData();
    const openDetailMenu = useSelector(state => state.data.openDetailMenu);
    const toggleFavoriteMenu = useSelector(state => state.data.toggleFavoriteMenu);

    const loading = useSelector(state => state.ui.loading);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchPokemonsWidthDetails("pokemon?limit=151"));     
    },[]);



    return (
        <>
            <Navigation/>
            <main>
                {toggleFavoriteMenu && <AddedTofavoritesMenu/>}
                <PokeGirlImg/>
                <PokemonAppTitule/>
                <Search filteredPokemons={filteredPokemons} />   
                {loading && <Loading/>}     
                {!loading && 
                    <CardsContainer>
                        {filteredPokemons.map((pokemon)=><PokemonCard key={pokemon.name} pokemon={pokemon} />)}
                    </CardsContainer>
                }
                {openDetailMenu && 
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