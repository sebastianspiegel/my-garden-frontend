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

class App extends Component {

  render(){
    return (
      <Router> 
        
          <div className="App">
            <Header />
            <Switch>
            <Route path="/seeds">
              <SeedContainer />
            </Route>
            {this.props.user.id ? 
            <Route path="/users">
              <UserContainer />
            </Route> :
            <Route exact path="/login" >
              <Login />
            </Route>
            }
            <Route path="/gardens/:id" component={GardenContainer} />
              {/* <GardenContainer />
            </Route> */}
            </Switch>
          </div>
        
      </Router>
    );
  }
}

const mapStateToProps = (state) => ({user: state.user})

export default connect(mapStateToProps, null)(App);
