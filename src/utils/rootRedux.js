import { combineReducers } from "redux";
import { dataReducer } from "@slices/dataSlice";
import { uiReducer } from "@slices/uiSlice";
import { regionReducer } from "@slices/regionSlice";


const rootReducer = combineReducers(
    {
        data: dataReducer,
        ui:uiReducer,
        regions: regionReducer,
    }
)

export {rootReducer}