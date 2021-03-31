//functional component for the add seed to garden form 
import React, { useState } from 'react';

export default function AddSeedForm(props){

    const [selectedGarden, setSelectedGarden] = useState({})

    function setOptions(){
        return props.gardens ? props.gardens.map(garden => <option id={garden.id} key={garden.id}>{garden.attributes.name}</option>) : <option>No gardens</option>
    }


    function handleChange(e){
        setSelectedGarden(e.target.value)
    }

    function handleAddSeedSubmit(e){
        e.preventDefault()
        let garden = props.gardens.find(garden => garden.attributes.name === selectedGarden)
        props.handleAddClick(garden)
    }

    function buttonText(){
        return props.ingarden ? "Added!" : "Add to garden"
    }

    function buttonDisabled(){
        return props.gardens ? false : true
    }

    return(
        <div>
            <form>
                <select value={selectedGarden} onChange={(e) => handleChange(e)}>
                    <option value=""  defaultValue hidden>Select a garden</option>
                    {setOptions()}
                </select><br />
                <button disabled={buttonDisabled()} type="submit" className="add-button" onClick={(e) => handleAddSeedSubmit(e)}>{buttonText()}</button>
            </form>
         </div>
    )

}
