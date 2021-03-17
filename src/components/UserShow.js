import React from 'react'
import SeedCard from './SeedCard'


function UserShow(props) {

    function makeGardenCards(){
        return this.props.gardens ? this.props.gardens.map(garden => <li key={garden.id}>{garden.name}</li>) : <li>No gardens have been made</li>
    }

    
    return(
        <div>
            <h2>{this.props.user}'s Gardens</h2>
            {makeGardenCards()}
        </div>
    )
    

}

export default UserShow