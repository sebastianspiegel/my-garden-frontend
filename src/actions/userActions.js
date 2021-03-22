// const url = `http://localhost:3000/users/${userid}/gardens`


export const setGardens = (gardens) => ({type: "USER/GOT_GARDENS", payload: gardens})

export const newGarden = (garden) => ({type: "USER/ADD_GARDEN", payload: garden})

export const fetchGardens = (userid) => {
    return(dispatch) => {
        fetch(`http://localhost:3000/users/${userid}/gardens`)
        .then(resp => resp.json())
        .then(json => {
            dispatch(setGardens(json.data))
        })
    }
}

export const addGarden = (newgarden) => {
    return (dispatch) => {
        console.log(newgarden)
        const configObj = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accepts': 'application/json'
            },
            body: JSON.stringify(newgarden)
        }
        fetch(`http://localhost:3000/users/1/gardens`, configObj)
        .then(resp => resp.json())
        .then(json => {
            dispatch(newGarden(json))
        })
    }
}
