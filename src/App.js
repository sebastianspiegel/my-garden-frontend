import './App.css';
import SeedContainer from './containers/IndexContainer';
import UserContainer from './containers/UserContainer'
import { Component } from 'react'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"; 
import Header from './Header'
// import GardenCard from './components/GardenCard';
import GardenContainer from './containers/GardenContainer';

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
