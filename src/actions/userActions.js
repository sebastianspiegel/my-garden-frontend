// const url = `http://localhost:3000/users/${userid}/gardens`


export const setGardens = (gardens) => ({type: "USER/GOT_GARDENS", payload: gardens})

export const addGarden = (garden) => ({type: "USER/ADD_GARDEN", payload: garden})

export const fetchGardens = (userid = 1) => {
    return(dispatch) => {
        fetch(`http://localhost:3000/users/${userid}/gardens`)
        .then(resp => resp.json())
        .then(json => {
            dispatch(setGardens(json.data))
        })
    }
}

export const createGarden = (garden) => {
    return (dispatch) => {
        const configObj = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accepts': 'application/json'
            },
            body: JSON.stringify(garden)
        }
        fetch(`http://localhost:3000/gardens`, configObj)
        .then(resp => resp.json())
        .then(json => {
            dispatch(addGarden(json.data))
        })
    }
}