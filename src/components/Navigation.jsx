import React from 'react';
import { HiBars4 } from "react-icons/hi2";
import { useDispatch, useSelector } from 'react-redux';
import { fetchPokemonsWidthDetails } from '@slices/dataSlice';
import { handleSetLoading } from '@slices/uiSlice';
import { handleSetRegions } from '@slices/regionSlice';
import { handleSetOpenMenuMobile } from '@slices/regionSlice';
import logo from '@images/logo.png'
import { handleSetCurrentRegion } from '@slices/regionSlice';

function Navigation(){
    const regionList = useSelector(state => state.regions.regionsList);
    const openMobileMenu = useSelector(state => state.regions.openMobileMenu);
    const dispatch = useDispatch();

    const handleOnChaneRegion = (url, index) => { 
        //Validamos que el usuario de click en una región diferente a la actual 
        if(!regionList[index].actived === true){
            dispatch(handleSetRegions(index))//Actualizamos el color del <li></li>
            dispatch(fetchPokemonsWidthDetails(url));//Realizamos consulta
            dispatch(handleSetLoading(true))//Generamos animación de carga de datos
            dispatch(handleSetCurrentRegion(regionList[index].name));
        }
    }
    const handleOnOpenMenuMobile = () => { 
        dispatch(handleSetOpenMenuMobile());
    }

    return(
        <header className='w-full h-auto shadow-pokeShadowNav
            fixed top-0 bg-navBg'
        >
            <nav className='w-full h-[auto] py-3 grid'>
                {openMobileMenu && 
                    <ul id="menu-mobile" className='w-[150px] p-4 border-l-0 border-2 border-red-200 fixed top-[58px] 
                        bg-navBg rounded-e-md list-disc list-inside divide-y
                        divide-rose-300 sm:hidden'
                    >
                        <p className='mb-2 text-xl font-bold text-red-200'>
                            Regions
                        </p>
                        {regionList.map((item, index)=> 
                            (   <li className={`me-4 py-1 font-semibold text-md ${item.actived && "text-yellow-300"}
                                    hover:text-yellow-300 cursor-pointer`} 
                                    onClick={()=> handleOnChaneRegion(item.urlLocation, index)}
                                    key={item.name}
                                >
                                    {item.name}
                                </li>
                            ))
                        }
                    </ul>
                }
                <div id="nav-mobile" className='grid grid-cols-pokeNav sm:hidden'>
                    <button className='ps-3 justify-self-start text-red-200' 
                        onClick={handleOnOpenMenuMobile}
                    >
                        <HiBars4 size={35}/>
                    </button>
                    <div className='w-auto justify-self-end flex items-center'>
                        <p className='pe-2 font-bold text-2xl text-red-200'>PokeRedux</p>
                        <img className=' w-7 h-7 me-3 object-fit text-center' src={logo} alt="Logo" />
                    </div>
                </div>
                <ul id="nave-desktop" className='w-[90%] sm:flex justify-self-center items-center
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