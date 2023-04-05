import React from 'react';
import loadingLogo from "@images/pokeball.png";

function Loading(){

    return(
        <div className='my-6 flex justify-center animate-spin'>
            <img className='w-12' src={loadingLogo}alt="Loading icon" />
        </div>
    )
}

export {Loading}