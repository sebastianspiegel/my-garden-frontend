import React from 'react';
import ReactCardFlip from 'react-card-flip';
import SeedCardBack from './SeedCardBack';
import SeedCardFront from './SeedCardFront'
import { connect } from 'react-redux'
import {removeGardenSeed} from '../actions/gardenActions'
import {addGardenSeed} from '../actions/gardenActions'
import AddSeedForm from './AddSeedForm';

class SeedCard extends React.Component {

    constructor() {
        super();
          this.state = {
            ...this.state,
            isFlipped: false,
            ingarden: false
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    }

    handleRemoveClick = (seed) => {
        this.props.removeGardenSeed(seed, 1)
    }

    addSeedToGarden = (garden) => {
        let seed = this.props.seed
        console.log(garden.id)
        console.log(seed)
        // this.props.addGardenSeed(seed, garden.id) 
        //garden.id
    }

    renderButton(){
        // logic for which button to appear
        if (this.props.page === "index") {
            return <AddSeedForm handleAddClick={this.addSeedToGarden} gardens={this.props.gardens}/>
        } else {
            return <button  className="remove-button" onClick={() => this.handleRemoveClick(this.props.seed)}>Remove from Garden</button>
        }
    }

    render(){
        return(
            <div className="card-hidden" onClick={this.handleClick}>
                <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal">
                    <div className="card" onClick={this.handleClick}>
                        <SeedCardFront seed={this.props.seed} handleClick={this.handleClick} />
                        <br />
                        {this.renderButton()}
                    </div>
                    <div className="card" onClick={this.handleClick}>
                        <SeedCardBack seed={this.props.seed} handleClick={this.handleClick} />
                    </div>
                </ReactCardFlip>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        gardens: state.gardens 
    }
}

export default connect(mapStateToProps, {removeGardenSeed, addGardenSeed})(SeedCard)