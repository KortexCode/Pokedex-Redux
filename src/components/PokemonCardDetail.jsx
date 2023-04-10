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
            <div className='h-auto rounded-b-lg bg-red-800'>
                <ul className=' list-disc list-inside'>
                    <p className='ps-2'>Type:</p>
                    <li className='ps-4'>
                        {pokemon.types.map((item)=> item.type.name).join(", ")}
                    </li>
                </ul>
                <ul className=' list-disc list-inside'>
                    <p className='ps-2'>Abilities:</p>
                    <li className='ps-4'>
                        {pokemon.abilities.map((item)=> item.ability.name).join(", ")}
                    </li>
                </ul>
                {/* <p className='ps-2 py-2 text-base font-bold text-red-200 '>
                    {pokemon.types.map((item)=> item.type.name).join(", ")}
                </p>   */}    
            </div>
        </div>
    )
}

export { PokemonCardDetail }