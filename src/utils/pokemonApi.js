import axios from "axios";


function consultApiData(){
    const axio = axios.create({
        baseURL: "https://pokeapi.co/api/v2/pokemon?limit=151",
    })

    return axio;
}

export {consultApiData}

