const url = `http://localhost:3000/gardens/1`
//  const url = `http://localhost:3000/gardens/${gardenid}`

//  export const setGardenSeeds = (garden) => ({type: "GARDEN/GOT_SEEDS", payload: garden})

export const addSeedToGarden = (seed) => ({type: "GARDEN/ADD_SEED", playload: seed})

export const removeSeedFromGarden = (seed) => ({type: "GARDEN/REMOVE_SEED", payload: seed})

export const fetchGardenSeeds = () => {
    return (dispatch) => {
        fetch(`http://localhost:3000/gardens/1`)
        .then(resp => resp.json())
        .then(json => {
            // console.log(json)
            // dispatch(setGardenSeeds(json))
            dispatch({type: "GARDEN/GOT_SEEDS", payload: json})
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