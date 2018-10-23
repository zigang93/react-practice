import React from 'react';
import './Ninjas.css';

// UI component, no need Class
const Ninjas = ({ninjas}) => {

  // show all props on this components
  // console.log(this.props)
  // same thing go to -> this.props.name , ..

  // condition if else
  const x = 25
  const ninjasList = ninjas.map(ninja => {
     return ninja.age > x ?
      <div className="ninja" key={ninja.id}>
        <div>Name:{ninja.name}</div>
        <div>Age: {ninja.age}</div>
        <div>Belt: {ninja.belt}</div>
      </div>
      : null; 
  });

  return( 
    <div className="ninjas-list">
      { ninjasList }
    </div>
  ); 
  
}

export default Ninjas;