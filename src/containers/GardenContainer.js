// renders seed cards 
// current in usershow componant 
import React from 'react'
import {connect} from 'react-redux'
import SeedCard from '../components/SeedCard'
import {fetchGardenSeeds} from '../actions/gardenActions'


class GardenContainer extends React.Component {

    makeSeedCards(){
        console.log(this.props)
        // return this.props.garden ? this.props.garden.seeds.map(seed => <SeedCard page="index" key={seed.id} seed={seed}/>) : <h2>No Seeds</h2>
        // return this.props.garden.seeds.map(seed => <SeedCard page="index" key={seed.id} seed={seed}/>)
    }

    componentDidMount(){
        this.props.fetchGardenSeeds()
    }

    render(){
        console.log(this.props)
        return(
            <div>
                In the garden container 
                {/* {this.makeSeedCards()} */}
                {this.props.garden ? this.makeSeedCards() : <h2>No Seeds</h2>}
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    console.log(state)
    return{
        garden: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchGardenSeeds: () => dispatch(fetchGardenSeeds())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GardenContainer)

