import React from 'react';
import { HiMagnifyingGlass } from "react-icons/hi2";
import { useDispatch, useSelector } from 'react-redux';
import { handleSetSearch } from '@slices/dataSlice';


function Search({filteredPokemons}) {
    const search = useSelector(state => state.data.searchText);
    const loading = useSelector(state => state.ui.loading);
    const dispatch = useDispatch();
    
    const handleInputText = ({target}) => { 
        dispatch(handleSetSearch(target.value));
    }
    let show = true;
    //El valor de show se modificará sólo cuando exista información en el input
    if(!(search == ""))
        show = filteredPokemons.length ? true : false;

    return (
        <>
            <div className='w-[300px] mx-auto mt-24 sm:mt-[230px] mb-4 h-auto
                border-[3px] border-red-800 rounded-lg  shadow-md shadow-rose-950 flex 
                justify-between items-center bg-white'
            >
                <input disabled={loading} onChange={handleInputText}
                    className='p-2 border-none rounded-lg outline-none text-red-800' 
                    type="text" placeholder='Search a pokemon'
                />  
                <HiMagnifyingGlass className='pe-2 text-3xl stroke-2 
                    stroke-red-800'
                />     
            </div>
            {!show && <p className='mb-[40px] text-center text-rose-950'>{`There is no matches to "${search}"`}</p>}
        </>
    )
}

export {Search}