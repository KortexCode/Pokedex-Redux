import React from 'react';

function PokemonCard({pokemon}) {

    return (
        <>
            <div className='border border-slate-300 flex flex-col w-[180px]'>
                <div className='border-b border-slate-300' >
                    <p className='text-center'>{pokemon.name}</p>
                </div>
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/150.png" alt={pokemon.name}
                    className='w-full border-b border-slate-300'    
                />
                <div>
                    <p>Description</p>
                </div>
            </div>
         
        </>

    )
}

export { PokemonCard }