
//Next: Es la función que llamaremos cuando middleware termine su proceso, de manera que
//next manda el action al reducer con las modificaciones que hayan ocurrido o no.

//Action en la información que será enviada, allí encontramos un objeto con esos datos
//que serán enviados al reducer.

const logger = (store) => (next) => (action) => {
    console.log(action);
    next(action);
}
const newPokemon = (store) => (next) => (actionData) => {
    const feature = [ {name: "Misaka", url:"Kawaii waifu"}, ...actionData.action.payload];
    const updateAction = {...actionData, action: {...actionData.action, payload: feature}}
    next(updateAction)

}

export {logger, newPokemon}