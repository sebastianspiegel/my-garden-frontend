import React from 'react';
import { connect } from 'react-redux'

export default function GardenCard(props){

    //This entire component will be changed to display the garden cards on the user page
    // On click will route to <GardenContainer  />

    
    return(
        
        <div className="card">
            {console.log(props)}
            <h2>{props.garden.name}</h2>
            <img src="https://i.imgur.com/hLO0MHo.jpg" alt="" className="garden-avatar" />
        </div>
    )


    
}

