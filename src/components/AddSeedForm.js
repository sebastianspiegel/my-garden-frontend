import React from 'react'
import { connect } from 'react-redux'
import {fetchGardens} from '../actions/userActions'

class AddSeedForm extends React.Component {

    state = {
        garden: ""
    }

    componentDidMount(){
        this.props.fetchGardens(1)
    }

    setOptions(){
        this.state.gardens ? console.log(this.state.gardens) : console.log("no gardens")
        // return this.state.gardens.map(garden => <option>{garden.name}</option>)
    }

    handleChange = (event) => {
        this.setState({
            ...this.state,
            garden: event.target.value
        });
    }

    handleAddSeedSubmit = (e) => {
        e.preventDefault()
        console.log(this.state.garden)
    }

    render(){
        return(
            <div>
                <form>
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value=""  defaultValue hidden>Select a garden</option>
                        <option>Default</option>
                        <option>Back Garden</option>
                        <option>Vegetable Garden</option>
                        {this.setOptions()}
                    </select><br />
                    <button type="submit" className="add-button" onClick={this.handleAddSeedSubmit}>Add to garden</button>
                </form>
             </div>
        )
    }

}

const mapStateToProps = (state) => {
    return{
        gardens: state.gardens
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchGardens: () => dispatch(fetchGardens())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddSeedForm)