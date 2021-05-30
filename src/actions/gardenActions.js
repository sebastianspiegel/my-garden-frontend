export const setGardenSeeds = (garden) => ({type: "GARDEN/GOT_SEEDS", payload: garden})

export const removeSeed = (seed) => ({type: "GARDEN/REMOVE", payload: seed})

export const addSeed = (seed) => ({type: "GARDEN/ADD", playload: seed})

export const fetchGarden = (gardenid) => {
    return (dispatch) => {
        fetch(`https://peaceful-waters-87161.herokuapp.com/gardens/${gardenid}`)
        .then(resp => resp.json())
        .then(json => {
            dispatch(setGardenSeeds(json))
        })
    }
}

export const removeGardenSeed = (seed, gardenid) => {
    return (dispatch) => {
        const configObj = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Accepts': 'application/json'
            },
            body: JSON.stringify(seed)
        }
        fetch(`https://peaceful-waters-87161.herokuapp.com/gardens/${gardenid}`, configObj)
        .then(resp => resp.json())
        .then(json => {
            dispatch(removeSeed(json))
        })
    }
}

export const addGardenSeed = (seed, gardenid) => {
    return (dispatch) => {
        const configObj = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Accepts': 'application/json'
            },
            body: JSON.stringify(seed)
        }
        fetch(`https://peaceful-waters-87161.herokuapp.com/gardens/${gardenid}`, configObj)
        .then(resp => resp.json())
        .then(json => {
            dispatch(addSeed(json))
        })
    }
}
