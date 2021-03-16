import React from 'react';
import ReactCardFlip from 'react-card-flip';
import SeedCardBack from './SeedCardBack';
import SeedCardFront from './SeedCardFront'


class SeedCard extends React.Component {

    // state = ({
    //     ...this.state,
    //     seed: this.props,
    //     isFlipped: false
    // })

    constructor() {
        super();
          this.state = {
            ...this.state,
            seed: this.props,
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
                        <SeedCardFront seed={this.props} handleClick={this.handleClick} />
                    </div>
                    <div onClick={this.handleClick}>
                        <SeedCardBack seed={this.props} handleClick={this.handleClick} />
                    </div>
                </ReactCardFlip>
            </div>
        )
    }
}

export default SeedCard

// function SeedCard(props){

//     function handleClick(e) {
//         e.preventDefault();
//         this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
//     }

//     return(
//         <div className="card" onClick={handleClick}>
//             <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
//                 <div onClick={this.handleClick}>
//                     <SeedCardFront seed={props.seed}/>
//                 </div>
//                 <div onClick={this.handleClick}>
//                     <SeedCardBack seed={props.seed} />
//                 </div>
//                 <button>Remove</button>
//             </ReactCardFlip>
//         </div>
//     )
// }

// export default SeedCard