// const url = `http://localhost:3000/users/${userid}/gardens`


export const setGardens = (gardens) => ({type: "USER/GOT_GARDENS", payload: gardens})

export const fetchGardens = (userid) => {
    return(dispatch) => {
        fetch(`http://localhost:3000/users/${userid}/gardens`)
        .then(resp => resp.json())
        .then(json => {
            dispatch(setGardens(json.data))
        })
    }
}
