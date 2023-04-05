import React from 'react';
import { FavoriteIcon } from './FavoriteIcon';

function PokemonCard({pokemon}) {



    return (
        <div className='border border-slate-300 flex flex-col w-[180px]'>
            <div className='w-full border-b border-slate-300 flex justify-between' >
                <p className='ps-3 text-center'>{pokemon.name}</p>
                <FavoriteIcon pokemon={pokemon} />
            </div>
            <img src={pokemon.sprites.front_default} alt={pokemon.name}
                className='w-full border-b border-slate-300'    
            />
            <div>
                <p className='text-center'>Description</p>
                <ul>
                    <li>
                        Type:
                        <ul>
                            <li>{pokemon.types[0].type.name}</li>
                        </ul>
                    </li>
                    <li>
                        Abilitys:
                        <ul>
                            {pokemon.abilities.map((item)=> 
                                (<li key={item.ability.name} >{item.ability.name}</li>))
                            }
                        </ul>
                    </li>      
                </ul>
            </div>
        </div>
    )
}

export { PokemonCard }