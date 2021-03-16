const url = "http://127.0.0.1:3000/seeds"

export const setSeeds = (seeds) => ({type: "GOT_SEEDS", payload: seeds})

export const fetchToys = () => {
    console.log("fetching toys")
    return (dispatch) => {
        dispatch({type: "LOADING"})
        fetch(url)
        .then(resp => resp.json())
        .then(json => {
            dispatch(setSeeds(json))
        })
    }
}