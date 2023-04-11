import React from 'react';
import { HiBars4 } from "react-icons/hi2";
import { useDispatch, useSelector } from 'react-redux';
import { fetchPokemonsWidthDetails } from '@slices/dataSlice';
import { handleSetLoading } from '@slices/uiSlice';
import { handleSetRegions } from '@slices/regionSlice';

function Navigation(){
    const regionList = useSelector(state => state.regions.regionsList);
    const dispatch = useDispatch();

    const handleOnChaneRegion = (url, index) => { 
        //Validamos que el usuario de click en una región diferente a la actual 
        if(!regionList[index].actived === true){
            dispatch(handleSetRegions(index))//Actualizamos el color del <li></li>
            dispatch(fetchPokemonsWidthDetails(url));//Realizamos consulta
            dispatch(handleSetLoading(true))//Generamos animación de carga de datos
        }
    }

    return(
        <header className='w-full h-auto shadow-pokeShadowNav
            fixed top-0 bg-navBg'
        >
            <nav className='w-full h-[auto] py-3 grid'>
                <ul className='w-[150px] p-4 border-2 border-red-900 fixed top-[54px] 
                    bg-red-700 rounded-e-md list-disc list-inside'>
                    <p className='mb-2 text-xl font-bold'>Regions</p>
                    {regionList.map((item, index)=> 
                        (   <li className={`me-4 font-semibold text-md ${item.actived && "text-yellow-300"}
                                hover:text-yellow-300 cursor-pointer`} 
                                onClick={()=> handleOnChaneRegion(item.urlLocation, index)}
                                key={item.name}
                            >
                                {item.name}
                            </li>
                        ))
                    }
                </ul>
                <div id="nav-movile" className='grid grid-cols-pokeNav sm:hidden'>
                    <button className='ps-3 justify-self-start'>
                        <HiBars4 size={30}/>
                    </button>
                    <div className='w-auto justify-self-end flex'>
                        <img className='me-2 text-center' src="" alt="Logo" />
                        <p className='pe-3'>PokeRedux</p>
                    </div>
                </div>
                <ul className='w-[80%] sm:flex justify-self-center items-center
                    flex-wrap justify-center hidden '
                >
                    {regionList.map((item, index)=> 
                        (   <li className={`me-4 font-bold text-lg ${item.actived && "text-yellow-300"}
                                hover:text-yellow-300 cursor-pointer`} 
                                onClick={()=> handleOnChaneRegion(item.urlLocation, index)}
                                key={item.name}
                            >
                                {item.name}
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </header>
    )
}

export {Navigation}