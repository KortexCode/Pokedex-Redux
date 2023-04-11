import axios from "axios";

const axiosApi = axios.create({
    baseURL: "https://pokeapi.co/api/v2/",
})

function consultApiData(){
    return axiosApi("pokemon?limit=151");
}

function getPokemonDetails(url){
    const axioRest = axios.get(url).then(rest => rest.data);
    return axioRest;
}
/* function getPokemonLocation(url){
    const axioRest = axios.get(url).then(rest => rest.data);
    return axioRest;
} */

export {consultApiData, getPokemonDetails}

