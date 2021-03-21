// renders seed cards 
// current in usershow componant 
import React from 'react'
import {connect} from 'react-redux'
import SeedCard from '../components/SeedCard'
import {fetchGardenSeeds} from '../actions/gardenActions'


class GardenContainer extends React.Component {

    makeSeedCards(){
        console.log(this.props)
        return this.props.garden ? this.props.garden.seeds.map(seed => <SeedCard page="index" key={seed.id} seed={seed}/>) : <h2>No Seeds</h2>
    }

    componentDidMount(){
        this.props.fetchGardenSeeds()
    }

    render(){
        return(
            <div>
                In the garden container 
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
        fetchGardenSeeds: () => dispatch(fetchGardenSeeds())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GardenContainer)

