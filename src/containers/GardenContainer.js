// renders seed cards 
// current in usershow componant 
import React from 'react'
import {connect} from 'react-redux'
import SeedCard from '../components/SeedCard'
import {fetchGarden} from '../actions/gardenActions'

 
class GardenContainer extends React.Component {

    makeSeedCards(){
        let seeds 
        if(this.props.garden){
            if(this.props.garden.seeds.length > 0){
                seeds = this.props.garden.seeds
                return seeds.map(seed => <SeedCard page="garden" key={seed.id} seed={seed} gardenId={this.props.match.params.id}/>)
            } else {
                return <h3>No seeds are in this garden, you can add some from the catalogue!</h3>
            }
        }
    }

    componentDidMount(){
        let gardenId = this.props.match.params.id
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

