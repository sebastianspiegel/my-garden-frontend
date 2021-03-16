import './App.css';
import SeedContainer from './containers/SeedsContainer';
import { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


class App extends Component {

  render(){
    return (
      <Router>
        <Switch>
          <div className="App">
            <h1>My Garden</h1>
            <SeedContainer />
          </div>
        </Switch>
      </Router>
    );
  }
}

export default App;
