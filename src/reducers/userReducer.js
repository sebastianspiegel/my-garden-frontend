const userReducer = (state = {garden: []}, action) => {

    switch(action.type){
        case "GARDEN/GOT_SEEDS":
            return {...state, garden: action.payload}
        default:
            return state
    }
}

export default userReducer