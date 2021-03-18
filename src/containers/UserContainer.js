import React from 'react'
// import {Route} from 'react-router-dom'
import {connect} from 'react-redux'
import UserShow from '../components/UserShow'
import {fetchGardenSeeds} from '../actions/userActions'

class UserContainer extends React.Component {

    componentDidMount(){
        this.props.fetchGardenSeeds()
    }

    makeGarden(){
        console.log(this.props)
        let user = this.props.garden.user 
        return user ? <UserShow user={this.props.garden.user} gardens={this.props.garden} seeds={this.props.garden.seeds}/> : user = ""
    }

    render(){
        return(
            <div>
                {/* <Route path="/users/id" component={(routeInfo) => {
                  const user = this.state.user
                  const gardens = this.state.gardens
                  return !!user ? <UserShow routeInfo={routeInfo} user={user} gardens={gardens}/> : <h3>Not Found!</h3>
                }}/> */}
                {/* <UserShow user={this.state.user} gardens={this.state.garden} seeds={this.state.seeds}/> */}
                {this.makeGarden()}
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return{
        garden: state.garden
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchGardenSeeds: () => dispatch(fetchGardenSeeds())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)