// const url = `http://localhost:3000/gardens/1`
//  const url = `http://localhost:3000/gardens/${gardenid}`

export const setGardenSeeds = (garden) => ({type: "GARDEN/GOT_SEEDS", payload: garden})

export const removeSeed = (seed) => ({type: "GARDEN/REMOVE", payload: seed})

export const gardenUpdate = (seed) => ({type: "GARDEN/UPDATE", playload: seed})

export const fetchGarden = (gardenid) => {
    return (dispatch) => {
        fetch(`http://localhost:3000/gardens/${gardenid}`)
        .then(resp => resp.json())
        .then(json => {
            // console.log(json.seeds)
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
        fetch(`http://localhost:3000/gardens/${gardenid}`, configObj)
        .then(resp => resp.json())
        .then(json => {
            dispatch(removeSeed(json))
        })
    }
}

export const updateGarden = (seed, gardenid) => {
    return (dispatch) => {
        const configObj = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Accepts': 'application/json'
            },
            body: JSON.stringify(seed)
        }
        fetch(`http://localhost:3000/gardens/${gardenid}`, configObj)
        .then(resp => resp.json())
        .then(json => {
            dispatch(gardenUpdate(json))
        })
    }
}
