import './App.css';
import SeedContainer from './containers/IndexContainer';
import UserContainer from './containers/UserContainer'
import GardenContainer from './containers/GardenContainer';
import LoginForm from './components/LoginForm'
import { Component } from 'react'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"; 
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
            <Route exact path="/login" >
              <LoginForm />
            </Route>
            <Route path="/users">
              <UserContainer />
            </Route> 
            <Route path="/gardens/:id" component={GardenContainer} />
              {/* <GardenContainer />
            </Route> */}
            </Switch>
          </div>
        
      </Router>
    );
  }
}

export default App;
