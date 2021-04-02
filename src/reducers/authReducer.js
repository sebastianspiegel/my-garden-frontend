const authReducer = (state = {id: null, username: null, signup: false}, action) => {

    switch(action.type){
        case "TOGGLE_SIGNUP":
            return {...state, signup: !state.signup}
        case "SET_USER":
            return {...state, ...action.payload.user}
        case "LOGOUT":
            return {...state, username: null, id: null}
        // case "LOGIN_FORM_CHANGE":
        //     return {...state, loginForm: {
        //         ...state.loginForm,
        //         [action.payoad.name]: action.payload.value
        //     }}
        default:
            return {...state}
    }
}

export default authReducer