import React, { useEffect, useState } from 'react';
import { Search } from '../components/Search';
import { CardsContainer } from '../components/CardsContainer';
import { PokemonCard } from '@components/PokemonCard';
import { consultApiData } from '../utils/pokemonApi';
import { connect } from 'react-redux';
import { handleSetPokemons } from '../utils/pokemonRedux';

function App({pokemons, setPokemons}) {

 /*    const [data, setData] = useState([]); */

    useEffect(()=>{
        
        const result = consultApiData();
        result().then(result => setPokemons(result.data.results))
        .catch(e => console.log(e))
        
    },[])
    console.log("first", pokemons)

    return (
        <>
            <Search/>
            <CardsContainer>
                {pokemons.map((pokemon)=><PokemonCard key={pokemon.name} pokemon={pokemon} />)}
            </CardsContainer>
        </>
    )
}

const mapStateToProps = (state) => ({
    pokemons: state.pokemons,
})
const mapDispatchToProps = (dispatch) => ({
    setPokemons: (value) => dispatch(handleSetPokemons(value))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);