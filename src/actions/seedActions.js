import { browserHistory } from '../index.js'

const url = "http://127.0.0.1:3000/seeds"

export const setSeeds = (seeds) => ({type: "GOT_SEEDS", payload: seeds})

export const addSeed = (seed) => ({ type: "ADDED_SEED", payload: seed })

// export const redirect = (link) => ({ type: "REDIRECT", payload: link })

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
            // dispatch(redirect("/seeds"))
        })
        // .then(dispatch(redirect("/seeds")))
    }
}