const url = "http://127.0.0.1:3000/seeds"

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
        console.log(seed)
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