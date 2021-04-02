
export const toggleSignup = () => ({type: "TOGGLE_SIGNUP"})

export const logout = () => {
    return dispatch => {
      localStorage.clear("token")
      dispatch({type: "LOGOUT"})
    }
}

export const autoLogin = () => {
    return dispatch => {
      fetch("http://localhost:3000/autologin", {
        method: 'POST', 
        headers: {
          'Authorization': localStorage.token,
        },
      })
      .then(response => response.json())
      .then(response => {
        dispatch({
        type: "SET_USER",
        payload: {user: response.user}
      })
    })
    }
}

export const sendSignup = (userData) => {
    return dispatch => {
      fetch("http://localhost:3000/users", {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      })
      .then(response => response.json())
      .then(response => {
        localStorage.token = response.token
        dispatch({
        type: "SET_USER",
        payload: {user: response.user}
      })
    })
    }
}

export const sendLogin = (userData) => {
    return dispatch => {
      fetch("localhost:3000/login", {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      })
      .then(response => response.json())
      .then(response => {
        localStorage.token = response.token
        dispatch({
        type: "SET_USER",
        payload: {user: response.user}
      })
    })
    }
  }