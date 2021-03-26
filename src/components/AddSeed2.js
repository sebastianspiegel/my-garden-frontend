//functional component for the add seed to garden form 

export default function AddSeedForm(){

    state = {
        selectedGarden: ""
    }

    function setOptions(){
        return <option></option>
    }


    function handleChange(event){

    }

    function handleAddSeedSubmit(e){
        e.preventDefault()
    }

    return(
        <div>
            <form>
                <select value={this.state.selectedGarden} onChange={(e) => handleChange(e)}>
                    <option value=""  defaultValue hidden>Select a garden</option>
                    {setOptions()}
                </select><br />
                <button type="submit" className="add-button" onClick={() => handleAddSeedSubmit(e)}>Add to garden</button>
            </form>
         </div>
    )

}
