import './App.css';
import SeedContainer from './containers/SeedsContainer';
import UserContainer from './containers/UserContainer'
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
            <Route path="/users">
              <UserContainer />
            </Route> 
          </div>
        </Switch>
      </Router>
    );
  }
}

export default App;
