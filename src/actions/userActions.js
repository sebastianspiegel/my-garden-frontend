const url = `http://localhost:3000/users/1/gardens/1`

export const setGardenSeeds = (seeds) => ({type: "GARDEN/GOT_SEEDS", payload: seeds})

export const fetchGardenSeeds = () => {
    return (dispatch) => {
        fetch(url)
        .then(resp => resp.json())
        .then(json => {
            dispatch(setGardenSeeds(json))
        })
    }
}