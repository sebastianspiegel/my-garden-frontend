import React from 'react'
import { Redirect } from "react-router";
import { connect } from 'react-redux'
import {sendLogin} from '../actions/authActions'

class LoginForm extends React.Component {

    state = {
        username: "",
        password: ""
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    handleSubmit = (e) => {
        e.preventDefault() 

        console.log(this.state)

        this.setState({
            username: "",
            password: ""
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
          return <Redirect to='/users' />
        }
    }

    render(){
        return(
            <div>
                {this.renderRedirect()}
                <form onSubmit={this.handleSubmit}>
                    <label type="text" name="username">Username: </label>
                    <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
                    <br/>
                    <label type="text" name="password">Password: </label>
                    <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
                    <br/>
                    <input type="submit" />
                </form>
            </div>
        )
    }

}

export default connect(null, {sendLogin})(LoginForm)
