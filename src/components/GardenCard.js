import React from 'react';
import ReactCardFlip from 'react-card-flip';
import SeedCardBack from './SeedCardBack';
import SeedCardFront from './SeedCardFront'
import {removeFromGarden} from '../actions/userActions'
import { connect } from 'react-redux'

class GardenCard extends React.Component {

    constructor() {
        super();
          this.state = {
            // seed: this.props.seed,
            isFlipped: false
        };
        this.handleClick = this.handleClick.bind(this);
    }
    

    handleClick(e) {
        e.preventDefault();
        this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    }

    handleRemove = (seed) => {
        this.props.removeFromGarden(seed)
    }

    render(){
        return(
            <div className="card-hidden" onClick={this.handleClick}>
                <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal">
                    <div className="card" onClick={this.handleClick}>
                        <SeedCardFront seed={this.props.seed} handleClick={this.handleClick} />
                        <br />
                        <button className="remove-button" onClick={() => this.handleRemove(this.props.seed)}>Remove from Garden</button>
                    </div>
                    <div className="card" onClick={this.handleClick}>
                        <SeedCardBack seed={this.props.seed} handleClick={this.handleClick} />
                    </div>
                </ReactCardFlip>
            </div>
        )
    }
}

export default connect(null, {removeFromGarden})(GardenCard)
