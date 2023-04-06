//Estado inicial
const initialState = {
    loading: true,
}
//Tipos de acciones
const actionType = {
    setLoading: "Stop loading",
}
//Objeto reductor
const objectReducer = (state, payload) => ({
    [actionType.setLoading] : {
        ...state,
        loading: payload,
    },
})
//Función reductora la cual devuelve el estado actualizado
function uiReducer(state = initialState, action){
    return objectReducer(state, action.payload)[action.type] || state;
}
//Acciones creadoras
const handleSetLoading = (payload) => ( 
    {
        type :actionType.setLoading,
        payload,
    }
)

export {
    uiReducer, 
    handleSetLoading,
  
}