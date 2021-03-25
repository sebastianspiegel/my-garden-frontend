import React from 'react';
import ReactCardFlip from 'react-card-flip';
import SeedCardBack from './SeedCardBack';
import SeedCardFront from './SeedCardFront'
import { connect } from 'react-redux'
import {updateGarden} from '../actions/gardenActions'
import {removeGardenSeed} from '../actions/gardenActions'
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
        this.handleChange = this.handleChange.bind(this)
    }

    handleClick(e) {
        e.preventDefault();
        this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    }

    // handleAddClick = (seed) => {
    //     this.props.updateGarden(seed, 1)
    //     this.setState(prevState => ({ ingarden: !prevState.ingarden }));
    //     // console.log(seed)
    // }

    handleRemoveClick = (seed) => {
        this.props.removeGardenSeed(seed, 1)
    }

    // changeAddButton(){
    //     return this.state.ingarden ? "Added!" : "Add to garden"
    // }

    // handleChange(event) {
    //     this.setState({
    //         ...this.state,
    //         value: event.target.value
    //     });
    //     console.log(this.state)
    // }

    // handleAddSeedSubmit = (e) => {
    //     e.preventDefault()
    //     console.log("clicked")
    // }

    renderButton(){
        // logic for which button to appear
        if (this.props.page === "index") {
            return (
                <AddSeedForm />
                // <button  className="add-button" onClick={() => this.handleAddClick(this.props.seed)}>{this.changeAddButton()}</button>
                    // <div>
                    //     <form onSubmit={this.handleAddSeedSubmit}>
                    //         <select value={this.state.value} onChange={this.handleChange}>
                    //             <option value=""  defaultValue hidden>Select a garden</option>
                    //             <option>Default</option>
                    //             <option>Back Garden</option>
                    //             <option>Vegetable Garden</option>
                    //         </select><br />
                    //         <input className="add-button" type="submit" value="Add to garden"/>
                    //     </form>
                    // </div>
            )
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