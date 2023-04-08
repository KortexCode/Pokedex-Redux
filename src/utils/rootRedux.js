import { combineReducers } from "redux";
import { pokemonsReducer } from "./pokemonRedux";
import { uiReducer } from "./uiRedux";
//Con Redux toolkit
import { sliceReducer } from "../slices/dataSlice";


const rootReducer = combineReducers(
    {
        data: sliceReducer
        /* ui: uiReducer, */
    }
)

export {rootReducer}