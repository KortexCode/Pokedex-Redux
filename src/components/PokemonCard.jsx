import React from 'react';
import { FavoriteIcon } from './FavoriteIcon';

function PokemonCard({pokemon}) {

    return (
        <div className='shadow-pokeShadow flex flex-col w-[180px] 
            bg-white'
        >
            <div className='w-full flex justify-between
                bg-red-800' 
            >
                <p className='ps-3 text-lg font-extrabold text-center text-red-300'>
                    {pokemon.name}
                </p>
                <FavoriteIcon pokemon={pokemon} />
            </div>
            <img src={pokemon.sprites.front_default} alt={pokemon.name}
                className='bg-red-400'    
            />
            <div className='bg-red-800'>
                <p className='ps-2 py-2 text-base font-bold text-red-200 '>
                    {pokemon.types.map((item)=> item.type.name).join(", ")}
                </p>      
            </div>
        </div>
    )
}

export { PokemonCard }