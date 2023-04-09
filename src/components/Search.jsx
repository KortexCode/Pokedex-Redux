import React from 'react';
import { HiMagnifyingGlass } from "react-icons/hi2";
import { useSelector } from 'react-redux';


function Search() {

    const loading = useSelector(state => state.ui.loading);


    return (
        <div className='w-[300px] mx-auto mt-4 mb-[32px] h-auto
            border-4 border-red-800  shadow-md shadow-rose-950 flex 
            justify-between items-center bg-white'
        >
            <input disabled={loading} className='p-2 border-none outline-none' 
                type="text" placeholder='Search a pokemon'
            />  
            <HiMagnifyingGlass className='pe-2 text-3xl stroke-2 stroke-red-800'
               
            />     
        </div>
    )
}

export {Search}