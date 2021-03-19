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
        return this.props.garden ? <UserShow user={this.props.garden.user} gardens={this.props.garden} seeds={this.props.garden.seeds}/> : <h2>No garden</h2>
    }

    render(){
        return(
            <div>
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