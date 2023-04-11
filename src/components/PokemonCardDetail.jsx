import React from 'react';
import { FavoriteIcon } from './FavoriteIcon';
import { HiOutlineXCircle } from "react-icons/hi2";
import { useDispatch, useSelector } from 'react-redux';
import { handleSetCloseDetailView } from '../slices/dataSlice';


function PokemonCardDetail() {
    const pokemon = useSelector(state  => state.data.pokemonDetail);
    const dispatch = useDispatch();

    const handleOnCloseDetail = () => {  
        dispatch(handleSetCloseDetailView(false));
    }

    return (
        <div className='w-80 rounded-t-lg rounded-b-lg shadow-pokeShadow
         flex flex-col bg-transparent'
        >
            <div className='w-full rounded-t-lg flex justify-between
                bg-red-800' 
            >
                <p className='ps-3 text-lg font-extrabold text-center text-red-300'>
                    {pokemon.name}
                </p>
                <FavoriteIcon pokemon={pokemon} />
            </div>
            <div className='w-full flex items-center justify-center 
                relative bg-red-400'
            >
                <button className='ms-1 mt-1 absolute top-0 left-0' onClick={handleOnCloseDetail}>
                    <HiOutlineXCircle size={34} color='pink'/>
                </button>
                <img src={pokemon.sprites.front_default} alt={pokemon.name}
                    className='w-48 bg-red-400 object-cover'  
                />
            </div>
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
                {/* <p className='ps-2 py-2 text-base font-bold text-red-200 '>
                    {pokemon.types.map((item)=> item.type.name).join(", ")}
                </p>   */}    
            </div>
        </div>
    )
}

export { PokemonCardDetail }