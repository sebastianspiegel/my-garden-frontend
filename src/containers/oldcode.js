// import React from 'react'
// // import {Route} from 'react-router-dom'
// import {connect} from 'react-redux'
// import UserShow from '../components/UserShow'
// import {fetchGardenSeeds} from '../actions/userActions'

// class UserContainer extends React.Component {

//     //this will render garden cards 
//     //garden cards are all the gardens a user has made 

//     // eventually this will be /user/id 
    

//     componentDidMount(){
//         this.props.fetchGardenSeeds()
//     }

//     makeGardenCards(){
//         //return <GardenCard garden={this.props.garden} />
//     }

//     makeGarden(){
//         return this.props.garden ? <UserShow user={this.props.garden.user} gardens={this.props.garden} seeds={this.props.garden.seeds} /> : <h2>No garden</h2>
//     }

//     render(){
//         return(
//             <div>
//                 {this.makeGarden()}
//             </div>
//         )
//     }
// }

// const mapStateToProps = (state) => {
//     return{
//         garden: state.garden
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         fetchGardenSeeds: () => dispatch(fetchGardenSeeds())
//     }
// }

// // export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)




// // OLD GARDENCARD CODE:

// import React from 'react';
// import ReactCardFlip from 'react-card-flip';
// import SeedCardBack from './SeedCardBack';
// import SeedCardFront from './SeedCardFront'
// import {removeFromGarden} from '../actions/userActions'
// import { connect } from 'react-redux'

// class GardenCard extends React.Component {

//     //This entire component will be changed to display the garden cards on the user page
//     // On click will route to <GardenContainer  />

//     constructor() {
//         super();
//           this.state = {
//               ...this.state,
//             isFlipped: false
//         };
//         this.handleClick = this.handleClick.bind(this);
//     }
    

//     handleClick(e) {
//         e.preventDefault();
//         this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
//     }

//     handleRemove = (seed) => {
//         this.props.removeFromGarden(seed)
//     }

//     render(){
//         return(
//             <div className="card-hidden" onClick={this.handleClick}>
//                 <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal">
//                     <div className="card" onClick={this.handleClick}>
//                         <SeedCardFront seed={this.props.seed} handleClick={this.handleClick} />
//                         <br />
//                         <button className="remove-button" onClick={() => this.handleRemove(this.props.seed)}>Remove from Garden</button>
//                     </div>
//                     <div className="card" onClick={this.handleClick}>
//                         <SeedCardBack seed={this.props.seed} handleClick={this.handleClick} />
//                     </div>
//                 </ReactCardFlip>
//             </div>
//         )
//     }
// }

// export default connect(null, {removeFromGarden})(GardenCard)
