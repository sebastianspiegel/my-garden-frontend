// renders seed cards 
// current in usershow componant 
import React from 'react'
import {connect} from 'react-redux'
import SeedCard from '../components/SeedCard'
import {fetchGarden} from '../actions/gardenActions'
import {fetchSeeds} from '../actions/seedActions'

 
class GardenContainer extends React.Component {

    makeSeedCards(){
        let seeds 
        // return this.props.garden ? this.props.garden.seeds.map(seed => <SeedCard page="index" key={seed.id} seed={seed}/>) : <h2>No Seeds</h2>
        if(this.props.garden){
            if(this.props.garden.seeds){
                seeds = this.props.garden.seeds
                return seeds.map(seed => <SeedCard page="garden" key={seed.id} seed={seed}/>)
            }
        }
    }

    componentDidMount(){
        console.log(this.props)
        let gardenId
        this.props.garden ? gardenId = this.props.garden.id : gardenId = this.props.match.params.id
        this.props.fetchGarden(gardenId)
    }

    render(){
        return(
            <div>
                {this.props.garden ? <h2>{this.props.garden.name}</h2> : <h2>Garden Name Here</h2>} 
                <br/>
                {this.makeSeedCards()}
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
        fetchGarden: (id) => dispatch(fetchGarden(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GardenContainer)

