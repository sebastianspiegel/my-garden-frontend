const userReducer = (state = {garden: []}, action) => {

    switch(action.type){
        case "USER/GOT_GARDENS":
            return {...state, gardens: action.payload}
        default:
            return state
    }
}

export default userReducer