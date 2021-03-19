const userReducer = (state = {garden: []}, action) => {

    switch(action.type){
        case "GARDEN/GOT_SEEDS":
            return {...state, garden: action.payload}
        case "GARDEN/ADD_SEED":
            return {...state, garden: [...state.garden, action.payload]}
        case "GARDEN/REMOVE_SEED":
            return {...state, garden: [
                ...state.garden.slice(0, action.payload),
                ...state.garden.slice(action.payload + 1)
            ]}
        default:
            return state
    }
}

export default userReducer