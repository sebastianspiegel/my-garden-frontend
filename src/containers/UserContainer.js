import React from 'react'
import {Route} from 'react-router-dom'
import UserShow from '../components/UserShow'

class UserContainer extends React.Component {

    state = {
        gardens: "",
        user: "",
    }

    componentDidMount(){
        this.fetchUserInfo()
    }

    fetchUserInfo(){
        const url = `http://localhost:3000/users/${this.state.user}`
        fetch(url)
        .then(resp => resp.json())
        .then(json => {
            this.somethingState(json)
        })
    }

    somethingState(data){
        this.setState({
            gardens: data.gardens,
            user: data.username
        })
        console.log(this.state)
    }

    render(){
        return(
            <div>
                <h2>User Route</h2>
                <Route path="/users/id" component={(routeInfo) => {
                  const user = this.state.user
                  const gardens = this.state.gardens
                  return !!user ? <UserShow routeInfo={routeInfo} user={user} gardens={gardens}/> : <h3>Not Found!</h3>
                }}/>
            </div>
        )
    }

}

export default UserContainer