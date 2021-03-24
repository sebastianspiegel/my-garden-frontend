const seedReducer = (state = {seeds: [], loading: false}, action) => {

    switch(action.type){
        case "SEEDS/GOT_SEEDS":
            return {...state, seeds: action.payload}
        case "SEEDS/ADDED_SEED":
            return {...state, seeds: [...state.seeds, action.payload], loading: false} 
        default: 
            return state 
    }
}

export default seedReducer