import React from 'react'
import SeedCard from '../components/SeedCard'
import {connect} from 'react-redux'
import { fetchSeeds } from '../actions/seedActions'

class SeedContainer extends React.Component{


    makeSeedCards(){
        console.log(this.props)
        let seeds = this.props.seeds.data
        return seeds ? seeds.map(seed => <SeedCard key="" seed={seed}/>) : seeds = []
    }

    componentDidMount(){
        this.props.fetchSeeds()
    }

    render(){
        return(
            <div>
                <form>
                    <input type="text"/>
                    <input type="submit" value="Search"/>
                </form>
                {this.makeSeedCards()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        seeds: state.seeds
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchSeeds: () => dispatch(fetchSeeds())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SeedContainer)
