import React from 'react'
import { connect } from 'react-redux'

class AddSeedForm extends React.Component {

    state = {
        garden: ""
    }

    handleChange(event) {
        this.setState({
            ...this.state,
            garden: event.target.value
        });
        console.log(this.state)
    }

    handleAddSeedSubmit = (e) => {
        e.preventDefault()
        console.log("clicked")
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleAddSeedSubmit}>
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value=""  defaultValue hidden>Select a garden</option>
                        <option>Default</option>
                        <option>Back Garden</option>
                        <option>Vegetable Garden</option>
                    </select><br />
                    <input className="add-button" type="submit" value="Add to garden"/>
                </form>
             </div>
        )
    }

}

export default (AddSeedForm)