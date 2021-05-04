import './App.css';
import SeedContainer from './containers/IndexContainer';
import UserContainer from './containers/UserContainer'
import GardenContainer from './containers/GardenContainer';
import LoginForm from './components/LoginForm'
import Login from './components/Login'
import { Component } from 'react'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"; 
import { connect } from 'react-redux'
import Header from './Header'
import {autoLogin, logout} from './actions/authActions'

class App extends Component {

  componentDidMount(){
    localStorage.token && this.props.autoLogin()
    console.log(this.props)
  }

  render(){
    return (
      <Router> 
        
          <div className="App">
            <Header />
            <Switch>
              <Route path="/seeds" component={SeedContainer} />
              {/* {this.props.user.id ?  */}
                <Route path="/users" component={UserContainer} /> 
                {/* : */}
                <Route exact path="/login" component={LoginForm}/>
              {/* } */}
              <Route path="/gardens/:id" component={GardenContainer} />
            </Switch>
          </div>
        
      </Router>
    );
  }
}

const mapStateToProps = (state) => ({user: state.user})

export default connect(mapStateToProps, {autoLogin, logout})(App);
// 