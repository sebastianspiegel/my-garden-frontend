import React from 'react'
import {connect} from 'react-redux'
import { fetchGardens } from '../actions/userActions'
import GardenCard from '../components/GardenCard'
// import {Link} from "react-router-dom";
import {addGarden} from "../actions/userActions"

class UserContainer extends React.Component {

    // eventually this will be /user/id 

    state = {
        garden: {
            name: ""
        },
        user_id: 1
    }

    componentDidMount(){
        this.props.fetchGardens(1)
    }

    makeGardenCards(){
        let gardens = []
        this.props.gardens ? gardens = this.props.gardens : gardens = []
        return gardens.map(garden => <GardenCard key={garden.id} garden={garden.attributes} gardenId={garden.id}/>)
    }

    handleChange = (e) => {
        this.setState({
            garden: {
                name: e.target.value
            }
        })
        console.log(this.state)
    }

    handleSubmit = (e) => {
        e.preventDefault()

        const garden = {...this.state}
        this.props.addGarden(garden)

        console.log(garden)

        this.setState({
            garden: {
                name: ""
            }
        })
    }

    render(){
        return(
            <div>
                Current User's Gardens<br/>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="New garden name..." onChange={this.handleChange} name="name" value={this.state.garden.name}/>
                    <input type="submit" value="Create New Garden" />
                </form>
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
        fetchGardens: () => dispatch(fetchGardens()),
        addGarden: () => dispatch(addGarden())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)