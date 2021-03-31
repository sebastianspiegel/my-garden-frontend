const gardenReducer = (state = {garden: {}}, action) => {

    switch(action.type){
        case "GARDEN/GOT_SEEDS":
            return {...state, garden: action.payload} 
        case "GARDEN/REMOVE":
            return {...state, garden: action.payload}
        case "GARDEN/ADD":
            return {...state, garden: action.payload} 
        default:
            return state
    }
}

export default gardenReducer