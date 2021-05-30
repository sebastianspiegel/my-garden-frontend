const url = "https://peaceful-waters-87161.herokuapp.com/seeds"

export const setSeeds = (seeds) => ({type: "SEEDS/GOT_SEEDS", payload: seeds})

export const addSeed = (seed) => ({ type: "SEEDS/ADDED_SEED", payload: seed })

export const fetchSeeds = () => {
    return (dispatch) => {
        fetch(url)
        .then(resp => resp.json())
        .then(json => {
            dispatch(setSeeds(json.data))
        })
    }
}

export const createSeed = (seed) => {
    return (dispatch) => {
        const configObj = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accepts': 'application/json'
            },
            body: JSON.stringify(seed)
        }
        fetch(url, configObj)
        .then(resp => resp.json())
        .then(json => {
            dispatch(addSeed(json.data))
        })
    }
}