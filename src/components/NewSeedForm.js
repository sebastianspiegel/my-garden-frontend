import React from 'react'
import { connect } from 'react-redux'
import {createSeed} from '../actions/seedActions'
import { Redirect } from "react-router";

class NewSeedForm extends React.Component {

    state = {
        common_name: "",
        latin_name: "",
        img: "",
        info: "",
    }

    handleSubmit = (e) => {
        e.preventDefault() 

        const seed = {...this.state}
        this.props.createSeed(seed)

        this.setState({
            common_name: "",
            latin_name: "",
            img: "",
            info: ""
        })

        this.setRedirect()
    }

    setRedirect = () => {
        this.setState({
            ...this.state,
            redirect: true
        })
    }

    renderRedirect = () => {
        if (this.state.redirect) {
          return <Redirect to='/seeds' />
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    render(){
        return(
            <div>
                {this.renderRedirect()}
                <form onSubmit={this.handleSubmit}>
                    Common Name: <input type="text" name="common_name" value={this.state.common_name} onChange={this.handleChange}/><br/>
                    Latin Name: <input type="text" name="latin_name" value={this.state.latin_name} onChange={this.handleChange}/><br/>
                    Image: <input type="text" name="img" value={this.state.img} onChange={this.handleChange}/><br/>
                    Information: <input type="text" name="info" value={this.state.info} onChange={this.handleChange}/><br/>
                    <input type="submit" />
                </form>
            </div>
        )
    }
}

export default connect(null, {createSeed})(NewSeedForm)