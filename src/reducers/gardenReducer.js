const gardenReducer = (state = {garden: []}, action) => {

    switch(action.type){
        case "GARDEN/GOT_SEEDS":
            return {...state, garden: action.payload} 
        // case "GARDEN/ADD_SEED":
        //     return {...state, garden: action.payload}
        // case "GARDEN/REMOVE_SEED":
        //     return {...state, garden: action.payload}
        default:
            return state
    }
}

export default gardenReducer