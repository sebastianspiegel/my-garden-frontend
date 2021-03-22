const gardenReducer = (state = {gardenseeds: []}, action) => {

    switch(action.type){
        case "GARDEN/GOT_SEEDS":
            return {...state, gardenseeds: action.payload} 
            // return {...state, seeds: action.payload}
        // case "GARDEN/ADD_SEED":
        //     return {...state, garden: action.payload}
        // case "GARDEN/REMOVE_SEED":
        //     return {...state, garden: action.payload}
        default:
            return state
    }
}

export default gardenReducer