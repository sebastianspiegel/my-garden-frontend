import React from 'react'
import SeedCard from '../components/SeedCard'
import {connect} from 'react-redux'
import { fetchSeeds } from '../actions/seedActions'
import SeedFilter from '../components/SeedFilter'
import SeedForm from '../components/SeedForm'
import {Route} from 'react-router-dom'

class SeedContainer extends React.Component{

    state = {
        search: ""
    }

    makeSeedCards(){
        let seeds = ""
        this.state.search !== "" ? seeds = this.props.seeds.data.filter(seed => seed.attributes.common_name.toLowerCase().includes(this.state.search.toLowerCase())) : seeds = this.props.seeds.data 
        return seeds ? seeds.map(seed => <SeedCard key={seed.id} seed={seed}/>) : seeds = []
    }

    componentDidMount(){
        this.props.fetchSeeds()
    }

    handleChange = (e) => {
        const search = e.target.value
        this.setState({search: search})
    }

    // addSeed = (seedData) => {
    //     this.setState((prevState, prevProps) => {
    //         return {
    //             seeds: [...prevState.seeds, seedData]
    //         }
    //     })
    // }

    render(){
        return(
            <div>
                <Route exact path="/seeds/new">
                  <SeedForm addSeed={this.addSeed}/>
                </Route>
                <Route exact path="/seeds">
                    <SeedFilter handleChange={this.handleChange} />
                    {this.makeSeedCards()}
                </Route>
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
