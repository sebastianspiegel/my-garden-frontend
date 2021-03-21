import React from 'react';
import {useHistory} from 'react-router-dom';

// import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import GardenContainer from '../containers/GardenContainer'

export default function GardenCard(props){

    const history = useHistory()

    function handleClick(){
        console.log(props.gardenId)
        history.push(`/gardens/${props.gardenId}`)
    }
    
    return(
        <div className="card" onClick={() => handleClick()}>
            <h2>{props.garden.name}</h2>
            <img src="https://i.imgur.com/hLO0MHo.jpg" alt="" className="garden-avatar" />
        </div>
    )
    
}
