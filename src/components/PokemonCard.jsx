import React, { useEffect } from 'react';
import { FavoriteIcon } from './FavoriteIcon';
import { useDispatch } from 'react-redux';
import { handleSetOpenDetailView } from '@slices/dataSlice';
import { useObserver } from '@hooks/useObserver';

function PokemonCard({pokemon}) {
    const observer = useObserver(pokemon);
    const dispatch = useDispatch();
    
    const handleOnOpenDetailView = () => { 
        dispatch(handleSetOpenDetailView(pokemon));
    }

    useEffect(()=>{
        const pokemonSprite = document.getElementById(pokemon.name)
        observer.observe(pokemonSprite)
    },[pokemon])

    return (
        <article className='w-[180px] shadow-pokeShadow grid grid-rows-pokeCard bg-red-800'>
            <div className='w-full flex justify-between items-center
                bg-red-800' 
            >
                <p className='ps-3 text-lg font-extrabold text-center text-red-300
                    capitalize'
                >
                    {pokemon.name}
                </p>
                <FavoriteIcon pokemon={pokemon} />
            </div>
            <img id={pokemon.name} src="" alt={pokemon.name}
                className='w-full h-[180px] bg-red-400' onClick={handleOnOpenDetailView}  
            />
            <div className='bg-red-800 self-end'>
                <p className='ps-2 py-2 text-base font-bold text-red-200 '>
                    {pokemon.types.map((item)=> item.type.name).join(", ")}
                </p>      
            </div>
        </article>
    )
}

export { PokemonCard }