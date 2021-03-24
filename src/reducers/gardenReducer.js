const gardenReducer = (state = {garden: {}}, action) => {

    switch(action.type){
        case "GARDEN/GOT_SEEDS":
            return {...state, garden: action.payload} 
        case "GARDEN/REMOVE":
            // return {...state, garden: [...state.garden.seeds.slice(0, action.payload.id), state.garden.seeds.slice(action.payload.id + 1)]}
            return {...state, garden: action.payload}
        case "GARDEN/UPDATE":
            return {...state, garden: action.payload} 
        default:
            return state
    }
}

export default gardenReducer