import { combineReducers } from "redux";
import { pokemonsReducer } from "./pokemonRedux";
import { uiReducer } from "./uiRedux";

const rootReducer = combineReducers(
    {
        data: pokemonsReducer,
        ui: uiReducer,
    }
)

export {rootReducer}