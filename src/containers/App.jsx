import React, { useEffect, useState } from 'react';
import { Search } from '../components/Search';
import { CardsContainer } from '../components/CardsContainer';
import { PokemonCard } from '@components/PokemonCard';
import { consultApiData } from '../utils/pokemonApi';

function App() {

    const [data, setData] = useState([]);

    useEffect(()=>{
        
        const result = consultApiData();
        result().then(result => setData(result.data.results))
        .catch(e => console.log(e))
        
    },[])
    console.log("first", data)

    return (
        <>
            <Search/>
            <CardsContainer>
                {data.map((pokemon)=><PokemonCard key={pokemon.name} pokemon={pokemon} />)}
            </CardsContainer>
        </>
    )
}

export {App}