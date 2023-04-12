import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function AddedTofavoritesMenu() {

    const pokemonAdded = useSelector(state => state.data.addedToFavorites);
    const dispatch = useDispatch();

    console.log("agregados", pokemonAdded);
    const handleOnDetailView = (poke)=> {
        dispatch()
    }

    return(
        <div className='w-[300px] pt-6 pb-6 border-l-0 border-2 border-red-200 
            rounded-e-md fixed top-[58px] bg-navBg z-10'  
        >
            <p className='w-[140px] ms-4 mb-2 text-xl font-bold text-red-200'>
                Favorites
            </p>
            <div className='w-[90%] my-0 mx-auto pt-1 border-t border-rose-400 
                flex items-center flex-wrap'
            >
                {pokemonAdded.map((item)=>
                        <div key={item.name} className='w-[auto] h-[auto] mt-2 me-2'>
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