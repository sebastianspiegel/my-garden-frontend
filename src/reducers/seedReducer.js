const seedReducer = (state = { seeds: [], loading: false }, action) => {
    switch(action.type){
        case "GOT_SEEDS":
            return {...state, seeds: action.payload, loading: false}
        case "LOADING":
            return {...state, loading: true}
        default: 
        return state 
    }
}

export default seedReducer