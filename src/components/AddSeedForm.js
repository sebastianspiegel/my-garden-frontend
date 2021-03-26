//functional component for the add seed to garden form 
import React, { useState } from 'react';

export default function AddSeedForm(props){

    const [selectedGarden, setSelectedGarden] = useState("")

    function setOptions(){
        return props.gardens ? props.gardens.map(garden => <option key={garden.id}>{garden.attributes.name}</option>) : <option>No gardens</option>
    }


    function handleChange(e){
        // console.log(e.target.value)
        setSelectedGarden(e.target.value)
    }

    function handleAddSeedSubmit(e){
        e.preventDefault()
        console.log(selectedGarden)
    }

    return(
        <div>
            <form>
                <select value={selectedGarden} onChange={(e) => handleChange(e)}>
                    <option value=""  defaultValue hidden>Select a garden</option>
                    {setOptions()}
                </select><br />
                <button type="submit" className="add-button" onClick={(e) => handleAddSeedSubmit(e)}>Add to garden</button>
            </form>
         </div>
    )

}
