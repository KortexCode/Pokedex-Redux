import React from 'react'
import ReactDOM  from 'react-dom/client';
import "./styles/main.css";
import { App } from '@containers/App';

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <>
        <p className='text-lg'>Pokemons!!, atrápalos yaaa!</p>
        <App/>
    </>
)