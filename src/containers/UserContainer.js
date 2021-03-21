import React from 'react'
import {connect} from 'react-redux'
import { fetchGardens } from '../actions/userActions'
import GardenCard from '../components/GardenCard'

class UserContainer extends React.Component {

    // eventually this will be /user/id 

    handleClick(){
        console.log("clicked a garden")
    }

    componentDidMount(){
        this.props.fetchGardens(1)
    }

    makeGardenCards(){
        let gardens = []
        this.props.gardens ? gardens = this.props.gardens : gardens = []
        return gardens.map(garden => <GardenCard key={garden.id} garden={garden.attributes} handleClick={this.handleClick}/>)
    }

    render(){
        return(
            <div>
                Current User's Garden<br/>
                {this.makeGardenCards()} 
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        gardens: state.gardens
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchGardens: () => dispatch(fetchGardens())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)