import React from 'react';
import ReactCardFlip from 'react-card-flip';
import SeedCardBack from './SeedCardBack';
import SeedCardFront from './SeedCardFront'
import { connect } from 'react-redux'
import {addToGarden} from '../actions/gardenActions'

class SeedCard extends React.Component {

    constructor() {
        super();
          this.state = {
            ...this.state,
            isFlipped: false
        };
        this.handleClick = this.handleClick.bind(this);
    }
    
    // componentDidMount(){
    //     if(this.state.redirectTo) {
    //         console.log("seedcard has redirect to in store")
    //     }
    // }

    handleClick(e) {
        e.preventDefault();
        this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    }

    handleButtonClick = (seed) => {
        this.props.addToGarden(seed)
    }

    renderButton(){
        console.log(this.props.page)
        // logic for which button to appear
        if (this.props.page === "index") {
            return <button className="add-button" onClick={() => this.handleButtonClick(this.props.seed)}>Add to garden</button>
        } else {
            return <button className="remove-button" onClick={() => this.handleButtonClick(this.props.seed)}>Remove from Garden</button>
        }
    }

    render(){
        return(
            <div className="card-hidden" onClick={this.handleClick}>
                <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal">
                    <div className="card" onClick={this.handleClick}>
                        <SeedCardFront seed={this.props.seed.attributes} handleClick={this.handleClick} />
                        <br />
                        {/* <button className="add-button" onClick={() => this.handleAddToGarden(this.props.seed)}>Add to garden</button> */}
                        {this.renderButton()}
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