import './App.css';
import SeedCard from './components/SeedCard'
// import { Component } from 'react'

function App() {
  return (
    <div className="App">
      <h1>My Garden</h1>
      <form>
        <input type="text"/>
        <input type="submit" value="Search"/>
      </form>
      <SeedCard />
    </div>
  );
}

export default App;
