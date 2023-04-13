import React from 'react'
import ReactDOM  from 'react-dom/client';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, legacy_createStore as createStore } from 'redux';
import { App } from '@containers/App';
import "@styles/main.css";
import thunk from 'redux-thunk';
import { rootReducer } from '@utils/rootRedux';

const root = ReactDOM.createRoot(document.getElementById("root"));

const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const composedEnhancers = composeAlt(
    applyMiddleware( thunk )
)
    
/*  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), */
const store = createStore(rootReducer, composedEnhancers);

root.render(
    <>
        {/* <p className='text-lg'>Pokemons!!, atrápalos yaaa!</p> */}
        <Provider store={store} >
            <App/>
        </Provider>
    </>
)