import React from 'react'
import ReactDOM  from 'react-dom/client';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, legacy_createStore as createStore } from 'redux';
import { pokemonsReducer } from './utils/pokemonRedux';
import { App } from '@containers/App';
import "./styles/main.css";
import { logger } from './middleware';
import thunk from 'redux-thunk';

const root = ReactDOM.createRoot(document.getElementById("root"));

const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const composedEnhancers = composeAlt(
    applyMiddleware( thunk, logger)
)
    
/*  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), */
const store = createStore(pokemonsReducer, composedEnhancers);

root.render(
    <>
        <p className='text-lg'>Pokemons!!, atrápalos yaaa!</p>
        <Provider store={store} >
            <App/>
        </Provider>
    </>
)