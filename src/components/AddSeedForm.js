import React from 'react'
import { connect } from 'react-redux'
// import {fetchGardens} from '../actions/userActions'

// connect(mapStateToProps)

class AddSeedForm extends React.Component {

    state = {
        gardens: [], 
        selectedGarden: ""
    }

    //useState hook to keep track of which garden is selected 
    //const [gardens, setGardens] = useState([])
    //setGardens(['garden here'])
    //const [selectedGarden, setSelectedGarden] = useState(‘’)

    // componentDidMount(){
    //     this.props.fetchGardens(1)
    // }

    setOptions(){
        // this.setState({
        //     gardens: store.getState().gardens
        // })
        this.state.gardens ? console.log(this.state.gardens) : console.log("no gardens")
        // return this.state.gardens.map(garden => <option>{garden.name}</option>)
    }

    handleChange = (event) => {
        this.setState({
            ...this.state,
            selectedGarden: event.target.value
        });
    }

    handleAddSeedSubmit = (e) => {
        e.preventDefault()
    }

    render(){
        return(
            <div>
                <form>
                    <select value={this.state.selectedGarden} onChange={this.handleChange}>
                        <option value=""  defaultValue hidden>Select a garden</option>
                        {/* <option>Default</option>
                        <option>Back Garden</option>
                        <option>Vegetable Garden</option> */}
                        {this.setOptions()}
                    </select><br />
                    <button type="submit" className="add-button" onClick={this.handleAddSeedSubmit}>Add to garden</button>
                </form>
             </div>
        )
    }


}

// const mapStateToProps = (state) => {
//     return{
//         gardens: state.gardens
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         fetchGardens: () => dispatch(fetchGardens())
//     }
// }

export default (AddSeedForm)