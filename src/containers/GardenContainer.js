// renders seed cards 
// current in usershow componant 
import React from 'react'
import {connect} from 'react-redux'
import SeedCard from '../components/SeedCard'
import {fetchGardenSeeds} from '../actions/gardenActions'
import {fetchSeeds} from '../actions/seedActions'

 
class GardenContainer extends React.Component {

    makeSeedCards(){
        console.log(this.props)
        // return this.props.garden ? this.props.garden.seeds.map(seed => <SeedCard page="index" key={seed.id} seed={seed}/>) : <h2>No Seeds</h2>
        // return this.props.garden.seeds.map(seed => <SeedCard page="index" key={seed.id} seed={seed}/>)
        // return this.props.seeds ? this.props.seeds.map(seed => <SeedCard page="index" key={seed.id} seed={seed}/>) : "no seeds"
        if(this.props.gardenseeds){
            return this.props.gardenseeds.map(seed => <SeedCard page="index" key={seed.id} seed={seed}/>)
        } else if (this.props.seeds){
            return this.props.seeds.map(seed => <SeedCard page="index" key={seed.id} seed={seed}/>)
        } else {
            return "no seeds"
        }
    }

    componentDidMount(){
        this.props.fetchSeeds()
        this.props.fetchGardenSeeds()
    }

    render(){
        // console.log(this.props)
        return(
            <div>
                In the garden container 
                <br/>
                {this.makeSeedCards()}
                {/* {this.props.garden ? this.makeSeedCards() : <h2>No Seeds</h2>} */}
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    console.log(state)
    return{
        gardenseeds: state.gardenseeds,
        seeds: state.seeds
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchGardenSeeds: () => dispatch(fetchGardenSeeds()),
        fetchSeeds: () => dispatch(fetchSeeds())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GardenContainer)

