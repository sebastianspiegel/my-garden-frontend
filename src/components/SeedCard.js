import React from 'react';
import ReactCardFlip from 'react-card-flip';
import SeedCardBack from './SeedCardBack';
import SeedCardFront from './SeedCardFront'
import { connect } from 'react-redux'
import {updateGarden} from '../actions/gardenActions'
import {removeGardenSeed} from '../actions/gardenActions'

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

    handleAddClick = (seed) => {
        this.props.updateGarden(seed)
        this.setState(prevState => ({ ingarden: !prevState.ingarden }));
        // console.log(seed)
    }

    handleRemoveClick = (seed) => {
        this.props.removeGardenSeed(seed)
    }

    changeAddButton(){
        return this.state.ingarden ? "Added!" : "Add to garden"
    }

    renderButton(){
        // logic for which button to appear
        if (this.props.page === "index") {
            return <button  className="add-button" onClick={() => this.handleAddClick(this.props.seed)}>{this.changeAddButton()}</button>
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

export default connect(null, {updateGarden, removeGardenSeed})(SeedCard)