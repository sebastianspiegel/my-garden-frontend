import React from 'react'
import { connect } from 'react-redux'
import { toggleSignup } from '../actions/userActions'

const Login = (props) => {
  const { signup, toggleSignup } = props
  return(
    <>
      <h3>{signup ? "Sign up!" : "Login!"} </h3>
      <form>
        <label>
          Username:
          <input type="text" name="username" />
        </label><br/>
        <label>
          Password:
          <input type="password" name="password" />
        </label><br/>
        {signup &&
          <>
            <label>
              Password Confirmation:
              <input type="password" name="passwordConfirmation" />
            </label>
            <input type="submit" value="Submit" />
          </>
        }
      </form>
      <br/>
      <br/>
      <button onClick={toggleSignup}>Or... {signup ? "Login!" : "Sign up!"}</button>
    </>
  )
}

const mapStateToProps = (state) => ({signup: state.user.signup})

export default connect(mapStateToProps, { toggleSignup })(Login)