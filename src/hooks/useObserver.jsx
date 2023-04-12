import React from 'react'
//Este hook se encarga generar una carga lazy de las imágenes de cada producto en el home
function useObserver(pokemon){

    let observer = new IntersectionObserver(entries => {
        entries.filter(entry => entry.isIntersecting).forEach(pokemonImg => {
            const  src = pokemon.sprites.front_default;
            const textValidation = src.substring(0,5);
            
            pokemonImg.target.setAttribute("alt", pokemon.name);
            if(textValidation != "https"){
                /* entryImg.target.setAttribute("src", imgNotFound); */
            }
            else
                pokemonImg.target.setAttribute("src", src);
        
            observer.unobserve(pokemonImg.target); //Dejamos de observar
        })
    });
    return observer;
}

export {useObserver}