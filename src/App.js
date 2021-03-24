import './App.css';
import SeedContainer from './containers/IndexContainer';
import UserContainer from './containers/UserContainer'
import GardenContainer from './containers/GardenContainer';
import LoginPage from './components/LoginPage'
import { Component } from 'react'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"; 
import Header from './Header'

class App extends Component {

  render(){
    return (
      <Router> 
        <Switch>
          <div className="App">
            <Header />
            <Route path="/seeds">
              <SeedContainer />
            </Route>
            <Route path="/users/login" >
              <LoginPage />
            </Route>
            <Route path="/users">
              <UserContainer />
            </Route> 
            <Route path="/gardens/:id">
              <GardenContainer />
            </Route>
          </div>
        </Switch>
      </Router>
    );
  }
}

export default App;
