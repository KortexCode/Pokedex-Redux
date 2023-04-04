import React from 'react'
import ReactDOM  from 'react-dom/client';
import { Provider } from 'react-redux';
import { legacy_createStore as createStore } from 'redux';
import { pokemonsReducer } from './utils/pokemonRedux';
import App from '@containers/App';
import "./styles/main.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

const store = createStore(pokemonsReducer);

root.render(
    <>
        <p className='text-lg'>Pokemons!!, atrápalos yaaa!</p>
        <Provider store={store} >
            <App/>
        </Provider>
    </>
)