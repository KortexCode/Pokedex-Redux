import React from 'react';
import '@styles/CardsContainer.css'


function CardsContainer({children}) {

    return (
        <div id="CardContainer" 
            className='w-[90%] mt-5 pb-4 mx-auto grid gap-4 justify-center'
        >
            {children}
        </div>
    )
}

export {CardsContainer}