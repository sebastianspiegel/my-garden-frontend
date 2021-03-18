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
        const url = `http://localhost:3000/users/1/gardens/1`
        fetch(url)
        .then(resp => resp.json())
        .then(json => {
            this.somethingState(json)
        })
    }

    somethingState(data){
        this.setState({
            garden: data.name,
            user: data.user.username,
            seeds: data.seeds
        })
    }

    render(){
        return(
            <div>
                <h2>User Container</h2>
                {/* <Route path="/users/id" component={(routeInfo) => {
                  const user = this.state.user
                  const gardens = this.state.gardens
                  return !!user ? <UserShow routeInfo={routeInfo} user={user} gardens={gardens}/> : <h3>Not Found!</h3>
                }}/> */}
                <UserShow user={this.state.user} gardens={this.state.garden} seeds={this.state.seeds}/>
            </div>
        )
    }

}

export default UserContainer