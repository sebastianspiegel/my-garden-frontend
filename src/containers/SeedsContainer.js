import React from 'react'
import SeedCard from '../components/SeedCard'
import { conntect } from 'react-redux'
import { fetchSeeds } from '../actions/seedActions'

class SeedContainer extends React.Component{

    addSeed = (seedData) => {
        this.setState((prevState, prevProps) => {
            return {
                seeds: [...prevState.seeds, seedData]
            }
        })
    }

    makeSeedCards(){
        return this.props.seeds.map(seed => <SeedCard seed={seed}/>)
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
                {this.props.loading ? <h1>LOADING...</h1> : this.makeSeedCards()}
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        seeds: state.seeds,
        loading: state.loading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchSeeds: () => dispatch(fetchSeeds())
    }
}

export default conntect(mapStateToProps, mapDispatchToProps)(SeedContainer)