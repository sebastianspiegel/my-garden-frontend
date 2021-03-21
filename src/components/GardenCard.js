import React from 'react';

// import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import GardenContainer from '../containers/GardenContainer'

export default function GardenCard(props){
    
    return(
        <div className="card" onClick={() => props.handleClick()}>
            <h2>{props.garden.name}</h2>
            <img src="https://i.imgur.com/hLO0MHo.jpg" alt="" className="garden-avatar" />
        </div>
    )
    
}

