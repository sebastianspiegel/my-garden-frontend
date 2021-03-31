import './App.css';
import SeedContainer from './containers/IndexContainer';
import UserContainer from './containers/UserContainer'
import GardenContainer from './containers/GardenContainer';
import LoginForm from './components/LoginForm'
import { Component } from 'react'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"; 
import Header from './Header'
import Welcome from './components/Welcome'

class App extends Component {

  render(){
    return (
      <Router> 
          <div className="App">
            <Header />
            <Switch>
              <Route path="/seeds" component={SeedContainer} />
              <Route path="/users" component={UserContainer} />
              <Route path="/gardens/:id" component={GardenContainer} />
            <Welcome />
            </Switch>
          </div>
      </Router>
    );
  }
}

export default App;
