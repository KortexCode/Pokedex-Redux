import React from 'react';
import { FavoriteIcon } from './FavoriteIcon';
import { HiOutlineXCircle } from "react-icons/hi2";
import { useDispatch, useSelector } from 'react-redux';
import { handleSetCloseDetailView } from '../slices/dataSlice';


function PokemonCardDetail() {
    //Obtenemos el pokemon agregado a detalles
    const pokemon = useSelector(state  => state.data.pokemonDetail);
    const dispatch = useDispatch();
    //Cerrar vista de detalles
    const handleOnCloseDetail = () => {  
        dispatch(handleSetCloseDetailView(false));
    }
    //Esta vista consta de un fondo transparente y una carta centrar con 3 secciones
    return (
        <div className='w-80 rounded-t-lg rounded-b-lg shadow-pokeShadow
         flex flex-col bg-transparent'
        >
            {/* título del pokemon */}
            <div className='w-full rounded-t-lg flex justify-between
                bg-red-800' 
            >
                <p className='ps-3 text-lg font-extrabold text-center text-red-300
                    capitalize'
                >
                    {pokemon.name}
                </p>
                <FavoriteIcon pokemon={pokemon} />
            </div>
            {/*  vista del sprite del pokemon */}
            <div className='w-full flex items-center justify-center 
                relative bg-red-400'
            >
                <button id="btn-close-detail" className='ms-1 mt-1 absolute top-0 left-0' onClick={handleOnCloseDetail}>
                    <HiOutlineXCircle size={34} color='pink'/>
                </button>
                <img src={pokemon.sprites.front_default} alt={pokemon.name}
                    className='w-48 bg-red-400 object-cover'  
                />
            </div>
           {/*  Vista del stats del pokemon */}
            <div className='h-auto p-2 rounded-b-lg bg-red-800 divide-y
                divide-rose-300'
            >
                <ul className=' list-disc list-inside'>
                    <p className='ps-2 text-lg font-bold'>Type:</p>
                    <li className='ps-4 pb-2 text-red-200 font-medium'>
                        {pokemon.types.map((item)=> item.type.name).join(", ")}
                    </li>
                </ul>
                <ul className=' list-disc list-inside'>
                    <p className='ps-2 pt-2 text-lg font-bold'>Abilities:</p>
                    <li className='ps-4 pb-2 text-red-200 font-medium'>
                        {pokemon.abilities.map((item)=> item.ability.name).join(", ")}
                    </li>
                </ul>
                <ul className=' list-disc list-inside'>
                    <p className='ps-2 pt-2 text-lg font-bold'>Stats</p>
                    {pokemon.stats.map((item)=> 
                        <li key={item.stat.name} className='ps-4 text-red-200'>
                            <p className='inline-block font-medium'>{item.stat.name}:</p> 
                            <span className='ms-1 text-red-300'>{item.base_stat}</span>
                        </li>)}
                </ul>
            </div>
        </div>
    )
}

export { PokemonCardDetail }