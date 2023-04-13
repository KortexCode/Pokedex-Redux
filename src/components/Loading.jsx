import React from 'react';
import loadingLogo from "@images/pokeball.png";

function Loading(){

    return(
        <>
            <div className='mt-6 mb-4 flex justify-center animate-spin'>
                <img className='w-12' src={loadingLogo}alt="Loading icon" />   
            </div>
            <p className='mt-2 text-lg font-bold text-red-300 text-center'>Loading...</p>
        </>
    )
}

export {Loading}