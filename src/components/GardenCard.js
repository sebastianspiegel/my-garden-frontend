import React from 'react';
import ReactCardFlip from 'react-card-flip';
import SeedCardBack from './SeedCardBack';
import SeedCardFront from './SeedCardFront'

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

    render(){
        return(
            <div className="card" onClick={this.handleClick}>
                <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal">
                    <div onClick={this.handleClick}>
                        <SeedCardFront seed={this.props.seed} handleClick={this.handleClick} />
                    </div>
                    <div onClick={this.handleClick}>
                        <SeedCardBack seed={this.props.seed} handleClick={this.handleClick} />
                    </div>
                </ReactCardFlip>
                <button onClick={() => console.log("remove from garden button")}>Remove from Garden</button>
            </div>
        )
    }
}

export default GardenCard
