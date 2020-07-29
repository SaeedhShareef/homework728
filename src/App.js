import React from 'react';
import Ninjas from "./Ninjas"

import './App.css';

function App() {
  return (
    <div className="App">
        <h1>My first React App</h1>
        <p>Welcome :D :O :P</p>
        <Ninjas name="Ryu" age="25" belt = "Black"/>
        <Ninjas name="Yoshi" age="30" belt = "Green"/>
    </div>
  );
}

export default App;
