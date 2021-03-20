import React from 'react';

import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import GardenContainer from '../containers/GardenContainer'

export default function GardenCard(props){

    //This entire component will be changed to display the garden cards on the user page
    // On click will route to <GardenContainer  />
    // or link to? <Link to="/garden/id">Garden Name Here</Link>

    function handleClick() {
        console.log("click")
        return <GardenContainer />
    }
    
    return(
        
        <div className="card" onClick={handleClick}>
            <h2>{props.garden.name}</h2>
            <img src="https://i.imgur.com/hLO0MHo.jpg" alt="" className="garden-avatar" />
        </div>
    )
    
}

