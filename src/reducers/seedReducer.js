const seedReducer = (state = {seeds: []}, action) => {

    switch(action.type){
        case "GOT_SEEDS":
            console.log("reached the seed reducer")
            return {...state, seeds: action.payload}
        default: 
            return state 
    }
}

export default seedReducer