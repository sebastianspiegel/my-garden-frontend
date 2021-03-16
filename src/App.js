import './App.css';
import SeedContainer from './containers/SeedsContainer';
import { Component } from 'react'


class App extends Component {

  render(){
    return (
      <div className="App">
        <h1>My Garden</h1>
        <SeedContainer />
      </div>
    );
  }
}

export default App;
