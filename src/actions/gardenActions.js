const url = `http://localhost:3000/gardens/1`
//  const url = `http://localhost:3000/gardens/${gardenid}`

export const setGardenSeeds = (garden) => ({type: "GARDEN/GOT_SEEDS", payload: garden})

export const removeSeed = (seed) => ({type: "GARDEN/REMOVE", payload: seed})

export const gardenUpdate = (seed) => ({type: "GARDEN/UPDATE", playload: seed})

export const fetchGarden = () => {
    return (dispatch) => {
        fetch(`http://localhost:3000/gardens/1`)
        .then(resp => resp.json())
        .then(json => {
            // console.log(json.seeds)
            dispatch(setGardenSeeds(json))
        })
    }
}

export const removeGardenSeed = (seed) => {
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
            dispatch(removeSeed(json))
        })
        // .then(dispatch(removeSeed(seed)))
    }
}

export const updateGarden = (seed) => {
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
            dispatch(gardenUpdate(json))
        })
    }
}
