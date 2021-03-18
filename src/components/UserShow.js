import React from 'react'
import GardenCard from './GardenCard'


function UserShow(props) {

    function makeSeedCards(){
        let seeds = ""
        return props.seeds ? props.seeds.map(seed => <GardenCard key={seed.id} seed={seed}/>) : seeds 
    }

    return(
        <div>
            <h2>{props.user}'s Gardens</h2>
            {makeSeedCards()}
        </div>
    )
    

}

export default UserShow