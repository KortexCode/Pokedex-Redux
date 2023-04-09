import React from 'react';
import { HiStar, HiOutlineStar } from "react-icons/hi2";
import { useDispatch } from 'react-redux';
import { handleSetAddedToFavorite } from '../slices/dataSlice';

function FavoriteIcon({pokemon}){
    const dispatch = useDispatch();
    const Icon = pokemon.favorite ? HiStar : HiOutlineStar;

    //Agregar o eliminar de favoritos
    const handleAddToFavorite = () => { 
        dispatch(handleSetAddedToFavorite(pokemon))
    }

    return(
        <button className='pe-2' onClick={handleAddToFavorite}>
           <Icon size={20} color='yellow'/>
        </button>
    )
}

export {FavoriteIcon}