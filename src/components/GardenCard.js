import React from 'react';
import {useHistory} from 'react-router-dom';

export default function GardenCard(props){

    const history = useHistory()

    function handleClick(){
        history.push(`/gardens/${props.gardenId}`)
    }
    
    return(
        <div className="card" onClick={() => handleClick()}>
            <h2>{props.garden.name}</h2>
            <img src="https://i.imgur.com/hLO0MHo.jpg" alt="" className="garden-avatar" />
        </div>
    )
    
}
