const url = `http://localhost:3000/users/1/gardens/1`

export const setGardenSeeds = (seeds) => ({type: "GARDEN/GOT_SEEDS", payload: seeds})

export const addSeedToGarden = (seed) => ({type: "GARDEN/ADD_SEED", playload: seed})

export const removeSeedFromGarden = (seed) => ({type: "GARDEN/REMOVE_SEED", payload: seed})

export const fetchGardenSeeds = () => {
    return (dispatch) => {
        fetch(url)
        .then(resp => resp.json())
        .then(json => {
            dispatch(setGardenSeeds(json))
        })
    }
}

export const addToGarden = (seed) => {
    return (dispatch) => {
        const configObj = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Accepts': 'application/json'
            },
            body: JSON.stringify(seed)
        }
        fetch(url, configObj)
        .then(resp => resp.json())
        .then(json => {
            dispatch(addSeedToGarden(json))
        })
    }
}

export const removeFromGarden = (seed) => {
    return (dispatch) => {
        const configObj = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Accepts': 'application/json'
            },
            body: JSON.stringify(seed)
        }
        fetch(url, configObj)
        .then(resp => resp.json())
        .then(json => {
            dispatch(removeSeedFromGarden(json))
        })
    }
}