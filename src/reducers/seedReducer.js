const seedReducer = (state = {seeds: []}, action) => {

    switch(action.type){
        case "SEEDS/GOT_SEEDS":
            return {...state, seeds: action.payload}
        case "SEEDS/ADDED_SEED":
            return {...state, seeds: [...state.seeds, action.payload]} 
        case "REDIRECT":
            console.log("in the reducer")
            return {...state, redirectTo: action.payload}
        default: 
            return state 
    }
}

export default seedReducer