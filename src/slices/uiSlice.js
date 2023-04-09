import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    loading: true,
}

const uiSlice = createSlice(
    {
        name: "ui",
        initialState,
        reducers: {
            handleSetLoading: (state, action) => {
                state.loading = action.payload;
            }
        },
    }
);

const {handleSetLoading} = uiSlice.actions;
const uiReducer = uiSlice.reducer;

export {uiReducer, handleSetLoading}

