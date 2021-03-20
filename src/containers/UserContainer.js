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
        //return <GardenCard garden={this.props.garden} />
        console.log(this.props.gardens)
        let gardens = []
        this.props.gardens > 0 ? gardens = this.props.gardens : gardens = []
        return gardens.map(garden => <GardenCard garden={garden}/>)
    }

    render(){
        return(
            <div>
                Current User's Garden
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