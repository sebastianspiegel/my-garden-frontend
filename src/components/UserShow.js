import React from 'react'
import GardenCard from './GardenCard'


function UserShow(props) {

    function makeSeedCards(){
        let seeds = ""
        return props.seeds ? props.seeds.map(seed => <GardenCard key={seed.id} seed={seed}/>) : seeds 
    }

    return(
        <div>
            <h2>{props.user.username}'s Garden</h2>
            {/* Garden cards will go here, clicking on them will take you to that garden component and show the seedcards for that garden */}
            {makeSeedCards()}
        </div>
    )

}

export default UserShow