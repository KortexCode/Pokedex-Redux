import React from 'react';
import { HiBars4 } from "react-icons/hi2";
import { useDispatch } from 'react-redux';
import { fetchPokemonsWidthDetails } from '../slices/dataSlice';
import { handleSetLoading } from '../slices/uiSlice';
import { regions } from '@utils/regionsData';

function Navigation(){
    const regionList = regions();
    const dispatch = useDispatch();

    const handleOnChaneRegion = (url) => { 
        dispatch(fetchPokemonsWidthDetails(url));
        dispatch(handleSetLoading(true))
    }

    return(
        <header className='w-full h-auto shadow-pokeShadowNav
            fixed top-0 bg-red-900'
        >
            <nav className='w-full h-[40px] grid'>
                <button className='w-auto justify-self-start hidden'>
                    <HiBars4/>
                </button>
                <ul className='w-[80%] flex justify-self-center items-center
                    justify-between'
                >
                   {/*  <li className='font-bold text-lg text-yellow-300 cursor-pointer' 
                        onClick={()=> handleOnChaneRegion("pokemon?limit=151")}
                    >
                        Kanto
                    </li> */}
                    {
                        regionList.map((item)=> (<li className='font-bold text-lg text-yellow-300
                                 cursor-pointer' 
                            onClick={()=> handleOnChaneRegion(item.urlLocation)}>
                                {item.name}
                            </li>))
                    }
                   
                    
                   {/*  <li>Johto</li>
                    <li>Hoenn</li>
                    <li>Sinnoh</li>
                    <li>Unova</li>
                    <li>Kalos</li>
                    <li>Alola.</li>
                    <li>Galar</li> */}
                </ul>
            </nav>
        </header>
    )
}

export {Navigation}