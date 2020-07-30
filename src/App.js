import React, { Component } from 'react';
import Ninjas from "./Ninjas";
import AddNinja from "./AddNinja";

class App extends Component {
  state = {
    ninjas : [
      { name: 'Ryu', age: 30, belt: 'black', id: 1},
      { name: 'Yoshi', age: 20, belt: 'green', id: 2},
      { name: 'Crystal', age: 25, belt: 'pink', id: 3}
    ]
  }
  
  render() {
      return (
        <div className="App">
        <h1>My first React App</h1>
         <p>Welcome :D :O :P</p>
            <Ninjas ninjas={this.state.ninjas}/>
            <AddNinja addNinja={this.addNinja}/>
        </div>
      );
  }
}  

export default App





