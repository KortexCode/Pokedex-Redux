import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    regionsList : [
        {
            name: "Kanto",
            urlLocation: "pokemon?limit=151",
            actived: true,
        },
        {
            name: "Johto",
            urlLocation: "pokemon?limit=100&offset=151",
            actived: false,
        },
        {
            name: "Hoenn",
            urlLocation: "pokemon?limit=135&offset=251",
            actived: false,
        },
        {
            name: "Sinnoh",
            urlLocation: "pokemon?limit=107&offset=386",
            actived: false,
        },
        {
            name: "Unova",
            urlLocation: "pokemon?limit=156&offset=493",
            actived: false,
        },
        {
            name: "Kalos",
            urlLocation: "pokemon?limit=72&offset=649",
            actived: false,
        },
        {
            name: "Alola",
            urlLocation: "pokemon?limit=88&offset=721",
            actived: false,
        },
        {
            name: "Galar",
            urlLocation: "pokemon?limit=89&offset=809",
            actived: false,
        }
    ],
    openMobileMenu: false,
    currentRegion: "Kanto",
}

//Se crea un slice con redux toolkit
const regionSlice = createSlice(
    {
        name: "regions",
        initialState,
        reducers: {
            handleSetRegions: (state, action) => {
                const newList = state.regionsList.map((item)=> {
                    item.actived = false;
                    return item;
                })
                const newState =  !newList[action.payload].actived;

                state.regionsList[action.payload].actived = newState;
            },
            handleSetOpenMenuMobile: (state, action) => {
                state.openMobileMenu = !state.openMobileMenu
            },
            handleSetCurrentRegion: (state, action) => {
                state.currentRegion = action.payload;
            }
        },
    }
);

//Desestructurando las acciones
const {
    handleSetRegions,
    handleSetOpenMenuMobile,
    handleSetCurrentRegion,
} = regionSlice.actions;
//Obteniedo el reducer
const regionReducer = regionSlice.reducer;

export {
    regionReducer, 
    handleSetRegions, 
    handleSetOpenMenuMobile,
    handleSetCurrentRegion,
}