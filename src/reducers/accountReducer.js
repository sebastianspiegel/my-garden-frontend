const accountReducer = (state = {id: "", username: "", signup: false}, action) => {

    switch(action.type){
        case "TOGGLE_SIGNUP":
            return {...state, signup: !state.signup}
        default:
            return state
    }
}

export default accountReducer