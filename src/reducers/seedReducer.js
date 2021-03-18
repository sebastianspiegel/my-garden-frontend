const seedReducer = (state = {seeds: []}, action) => {

    switch(action.type){
        case "GOT_SEEDS":
            return {...state, seeds: action.payload}
        case "ADDED_SEED":
            return {...state, seeds: [...state.seeds, action.payload]}
        case "REDIRECT":
            return {redirectTo: action.payload}
        default: 
            return state 
    }
}

export default seedReducer