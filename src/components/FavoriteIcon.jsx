import React from 'react';
import { HiStar, HiOutlineStar } from "react-icons/hi2";
import { useDispatch, useSelector } from 'react-redux';
import { handleSetAddedToFavorite } from '../utils/pokemonRedux';

function FavoriteIcon({pokemon}){
    const pokemonState = useSelector(state => state.pokemons);
    const dispatch = useDispatch();
    const Icon = pokemon.favorite ? HiStar : HiOutlineStar;

    //Agregar o eliminar de favoritos
    const handleAddToFavorite = () => { 
        const pokemonList = [...pokemonState];
        const pokemonId = pokemonList.findIndex((item)=>{
             return item.id == pokemon.id;
        })
        pokemonList[pokemonId].favorite = !pokemonList[pokemonId].favorite;

        dispatch(handleSetAddedToFavorite(pokemonList))
    }

    return(
        <button className='pe-2' onClick={handleAddToFavorite}>
           <Icon/>
        </button>
    )
}

export {FavoriteIcon}