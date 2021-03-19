import React from 'react';
import ReactCardFlip from 'react-card-flip';
import SeedCardBack from './SeedCardBack';
import SeedCardFront from './SeedCardFront'
import { connect } from 'react-redux'
import {addToGarden} from '../actions/userActions'

class SeedCard extends React.Component {

    constructor() {
        super();
          this.state = {
            ...this.state,
            isFlipped: false
        };
        this.handleClick = this.handleClick.bind(this);
    }
    

    handleClick(e) {
        e.preventDefault();
        this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    }

    handleAddToGarden = (seed) => {
        // e.preventDefault();
        console.log(seed)
        this.props.addToGarden(seed)
        //update action 
        //User.first.gardens.first.seeds.delete(Seed.find(6))
    }

    render(){
        return(
            <div className="card-hidden" onClick={this.handleClick}>
                <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal">
                    <div className="card" onClick={this.handleClick}>
                        <SeedCardFront seed={this.props.seed.attributes} handleClick={this.handleClick} />
                        <button onClick={() => this.handleAddToGarden(this.props.seed)}>Add to garden</button>
                    </div>
                    <div className="card" onClick={this.handleClick}>
                        <SeedCardBack seed={this.props.seed.attributes} handleClick={this.handleClick} />
                    </div>
                </ReactCardFlip>
                
            </div>
        )
    }
}

export default connect(null, {addToGarden})(SeedCard)