import React from 'react'
import {connect} from 'react-redux'
import { fetchGardens } from '../actions/userActions'
import GardenCard from '../components/GardenCard'

class UserContainer extends React.Component {

    //this will render garden cards 
    //garden cards are all the gardens a user has made 

    // eventually this will be /user/id 
    

    componentDidMount(){
        this.props.fetchGardens(1)
    }

    makeGardenCards(){
        let gardens = []
        this.props.gardens ? gardens = this.props.gardens : gardens = []
        return gardens.map(garden => <GardenCard key={garden.id} garden={garden.attributes}/>)
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