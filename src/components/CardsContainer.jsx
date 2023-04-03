import React from 'react';
import '@styles/CardsContainer.css'


function CardsContainer({children}) {

    return (
        <div id="CardContainer" className='w-[90%] my-0 mx-auto grid gap-4 justify-center'>
            {children}
        </div>
    )
}

export {CardsContainer}