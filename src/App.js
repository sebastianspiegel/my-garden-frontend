import './App.css';
import SeedCard from './components/SeedCard'
import SeedContainer from './containers/SeedsContainer';
// import { Component } from 'react'

function App() {
  return (
    <div className="App">
      <h1>My Garden</h1>
      <SeedContainer />
    </div>
  );
}

export default App;
