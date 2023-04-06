import React from 'react';

function Search() {
    console.log("ya me expusiste!!")
    return (
        <div className='mt-4 mb-[32px] w-[auto] h-auto flex justify-center '>
            <input className='p-2 border border-solid border-slate-400' 
                type="text" placeholder='Search a pokemon'
            />       
        </div>
    )
}

export {Search}