import axios from "axios";

const axiosApi = axios.create({
    baseURL: "https://pokeapi.co/api/v2/",
})

function consultApiData(apiUrl){
    return axiosApi(apiUrl);
}

function getPokemonDetails(url){
    const axioRest = axios.get(url).then(rest => rest.data);
    return axioRest;
}

export {consultApiData, getPokemonDetails}

