import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    pokemons : [],
}

const dataSlice = createSlice(
    {
        name: "data",
        initialState,
        reducers: {},
    }
)