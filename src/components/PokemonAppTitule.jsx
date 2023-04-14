import React from 'react';
import logo from '@images/logo.png';

function PokemonAppTitule() {

    return(
        <div className='w-full me-4 flex justify-center items-center'>
            <h1 className='me-2 text-2xl font-bold text-red-200'>
                PokeRedux
            </h1>
            <img className=' w-10 h-10 me-3 text-center' 
                src={logo} alt="Logo" 
            />
        </div> 
    )
}   

export {PokemonAppTitule}