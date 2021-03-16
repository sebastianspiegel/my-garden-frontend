import React from 'react'

export default function SeedFilter(props) {

    return(
        <form>
            <input type="text" placeholder="Filter seeds" onChange={props.handleChange}/>
        </form>
    )
}