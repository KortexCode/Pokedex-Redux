import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { handleSetOpenDetailView } from '@slices/dataSlice';
import { handleSetOpenMenuMobile } from '@slices/regionSlice';
import { handleSetToggleFavoriteMenu } from '@slices/dataSlice';
import { HiOutlineXCircle } from "react-icons/hi2";

function AddedTofavoritesMenu() {
    const openMobileMenu = useSelector(state => state.regions.openMobileMenu);
    const pokemonAdded = useSelector(state => state.data.addedToFavorites);
    const dispatch = useDispatch();
    //Poner barra de desplazamiento
    const scrollState = pokemonAdded.length >= 16 ? "overflow-y-scroll" : "";
    //Abrir vista de detalles de un pokemon en favoritos
    const handleOnDetailView = (pokemon)=> {
        dispatch(handleSetOpenDetailView(pokemon))
    }
    //Cerrar Menu de favoritos
    const handleOnCloseFavoriteMenu = () => {
        dispatch(handleSetToggleFavoriteMenu());
    }
    //Cerramos el Menú Mobile
    useEffect(()=>{
        if(openMobileMenu)
            dispatch(handleSetOpenMenuMobile())
    }, []);

    

    return(
        <div className='w-full sm:w-[320px] pt-6 pb-6 border-l-0 border-2 border-red-200 
            rounded-e-md fixed top-[58px] bg-navBg z-10'  
        >
            <div className='w-full flex items-center justify-between'>
                <p className='w-[140px] ms-4 mb-2 text-xl font-bold text-red-200'>
                    Favorites
                </p>
                <button id="btn-close-detail" className='me-4 mb-2' onClick={handleOnCloseFavoriteMenu}>
                        <HiOutlineXCircle size={34} color='pink'/>
                </button>
            </div>
            <div className={`w-[90%] h-[auto] max-h-[70vh] my-2 mx-auto pt-1 
                border-t border-rose-400 flex items-center flex-wrap ${scrollState}`}
            >
                {pokemonAdded.map((item)=>
                        <div key={item.name} className='w-[auto] h-[auto] pt-2 me-2'>
                            <img className="w-[80px] bg-red-400 rounded-full" 
                                src={item.sprites.front_default} 
                                onClick={()=> handleOnDetailView(item)}/>
                        </div>
                    )
                }
            </div>
        </div>

    )
}

export {AddedTofavoritesMenu}