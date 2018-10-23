import React, { Component } from 'react';
import './App.css';
import Ninjas from './Components/Ninjas';
import AddNinja from './Components/AddNinja';

class App extends Component {

  state = {
    ninjas : [
      {name: 'Zi Gang', age: 25 , belt:'black', id: 1},
      {name: 'Yoshi', age: 28 , belt:'white', id: 2},
      {name: 'Alex', age: 31 , belt:'pink', id: 3}
    ]
  }

  addNinja = (ninja) => {
    // temp id
    ninja.id = Math.random();

    // check value
    console.log(ninja);

    // clone the array of state coz we dont want change the state
    let ninjas = [...this.state.ninjas, ninja]

    this.setState({
      ninjas: ninjas
    })

  }

  deleteNinja = (id) => {
    // filter wuth id
    let ninjas = this.state.ninjas.filter(ninja => {
      return ninja.id !== id;
    });

    this.setState({
      ninjas: ninjas
    })

  }

  componentDidMount() {
    console.log('Component Mounted')
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componnet updated');
    console.log(prevProps, prevState);
  }

  render() {
    return (
      <div className="App">
        <h1>My first React App</h1>
        <p>Welcome</p>
        <Ninjas deleteNinja={this.deleteNinja} ninjas={this.state.ninjas}/>
        <AddNinja addNinja={this.addNinja} />
      </div>
    );
  }
}

export default App;