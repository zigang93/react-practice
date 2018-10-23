import React, { Component } from 'react';
import './App.css';
import Ninjas from './Components/Ninjas.js';

class App extends Component {

  state = {
    ninjas : [
      {name: 'Zi Gang', age: 25 , belt:'black', id: 1},
      {name: 'Yoshi', age: 28 , belt:'white', id: 2},
      {name: 'Alex', age: 31 , belt:'pink', id: 3}
    ]
  }

  render() {
    return (
      <div className="App">
        <h1>My first React App</h1>
        <p>Welcome</p>
        <Ninjas ninjas={this.state.ninjas}/>
      </div>
    );
  }
}

export default App;