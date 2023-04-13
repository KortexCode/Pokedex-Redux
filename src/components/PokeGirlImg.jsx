import React from 'react'
import { useSelector } from 'react-redux'

import misty from '@images/pokeGirls/Misty.png';
import misty2 from '@images/pokeGirls/Misty2.png';
import may from '@images/pokeGirls/May.png';
import dawn from '@images/pokeGirls/Dawn.png';
import iris from '@images/pokeGirls/Iris.png';
import serena from '@images/pokeGirls/Serena.png';
import lyli from '@images/pokeGirls/Lyli.png';
import chloe from '@images/pokeGirls/Chloe.png';

function PokeGirlImg() {

    const regionName = useSelector(state => state.regions.currentRegion);

    const pokeGirl = regionName == "Kanto" ? misty 
    : regionName == "Johto" ? misty2 
    :  regionName == "Hoenn" ? may 
    :  regionName == "Sinnoh" ? dawn 
    :  regionName == "Unova" ? iris 
    :  regionName == "Kalos" ? serena 
    :  regionName == "Alola" ? lyli 
    :  chloe; 

    return(
        <img className='w-[120px] h-[140px] mt-0 mx-auto absolute top-[120px]
            right-0 left-[460px] object-contain hidden sm:block' 
        src={pokeGirl} alt="Pokegirl"/>
    )

   
}

export {PokeGirlImg}