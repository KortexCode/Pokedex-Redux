import React from 'react';
import logo from '@images/logo.png';

function PokemonAppTitule() {

    return(
        <div className='w-full mt-20 sm:flex justify-center items-center hidden'>
            <h1 className='me-2 text-4xl font-bold text-red-200'>
                PokeRedux
            </h1>
            <img className=' w-10 h-10 me-3 text-center' 
                src={logo} alt="Logo" 
            />
        </div> 
    )
}   

export {PokemonAppTitule}