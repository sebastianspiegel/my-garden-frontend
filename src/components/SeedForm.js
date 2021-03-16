import React from 'react'
import {connect} from 'react-redux'

class SeedForm extends React.Component {

    render(){
        return(
            <div>
                <form>
                    Common Name: <input type="text"/>
                    Latin Name: <input type="text"/>
                    Image: <input type="text"/>
                    Information: <input type="text"/>
                </form>
            </div>
        )
    }
}

export default SeedForm 