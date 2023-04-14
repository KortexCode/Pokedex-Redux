import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPokemonsWidthDetails } from '@slices/dataSlice';
import { handleSetLoading } from '@slices/uiSlice';
import { handleSetRegions } from '@slices/regionSlice';
import { handleSetOpenMenuMobile } from '@slices/regionSlice';
import { handleSetCurrentRegion } from '@slices/regionSlice';
import { handleSetToggleFavoriteMenu } from '@slices/dataSlice';
import { PokemonAppTitule } from '@components/PokemonAppTitule';
import { HiBars4 } from "react-icons/hi2";
import { HiStar } from "react-icons/hi2";
import logo from '@images/logo.png';

function Navigation(){
    const regionList = useSelector(state => state.regions.regionsList);
    const toggleFavoriteMenu = useSelector(state => state.data.toggleFavoriteMenu);
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
    //Abrir o cerrar menú mobile
    const handleOnOpenMenuMobile = () => { 
        dispatch(handleSetOpenMenuMobile());
           //Cerrar menú de favoritos si está abierto
        if(toggleFavoriteMenu)
            dispatch(handleSetToggleFavoriteMenu());
    }
    //Abrir o cerrar mené de favoritos
    const handleOnToggleFavoriteMenu = () => { 
        dispatch(handleSetToggleFavoriteMenu());
        //Cerrar menú mobile si está abierto
        if(openMobileMenu){
            dispatch(handleSetOpenMenuMobile());
        }
    }

    return(
        <header className='w-full h-[59px] flex items-center shadow-pokeShadowNav
            fixed top-0 bg-navBg z-10'
        >
            <nav className='w-full h-[auto] py-3'>
                {openMobileMenu && 
                    <ul id="menu-mobile" className='w-[150px] p-4 border-l-0 border-2 border-red-200 fixed top-[58px] 
                        bg-navBg rounded-e-md list-disc list-inside divide-y
                        divide-rose-300 sm:hidden z-10'
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
                    <div className='w-auto justify-self-center flex items-center'>
                        <h1 className='pe-2 font-bold text-2xl text-red-200'>PokeRedux</h1>
                        <img className=' w-7 h-7 object-cover' src={logo} alt="Logo" />
                    </div>
                    <button className='pe-3 justify-self-end text-yellow-400' 
                           onClick={handleOnToggleFavoriteMenu}
                    >
                           <HiStar size={40}/>
                    </button>
                </div>
                <div id="nave-desktop" className='w-full sm:grid grid-cols-pokeNavDesktop
                    justify-items-center hidden'
                >
                    <button className='ps-3 justify-self-start text-yellow-400' 
                           onClick={handleOnToggleFavoriteMenu}
                    >
                           <HiStar size={40}/>
                    </button>
                    <ul className='w-[auto] ms-16 flex items-center justify-self-start
                        flex-wrap justify-center'
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
                    <PokemonAppTitule/>
                </div>
            </nav>
        </header>
    )
}

export {Navigation}