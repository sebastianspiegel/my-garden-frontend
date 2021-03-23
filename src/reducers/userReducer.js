const userReducer = (state = {gardens: []}, action) => {

    switch(action.type){
        case "USER/GOT_GARDENS":
            return {...state, gardens: action.payload}
        case "USER/ADD_GARDEN":
            return {...state, gardens: [...state.gardens, action.payload]}
        default:
            return state
    }
}

export default userReducer