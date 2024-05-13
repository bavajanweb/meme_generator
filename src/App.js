import logo from './logo.svg';
import './App.css';

import React from 'react'

function App() {

  const [thingsArray, setThingsArray] = React.useState(["thing1", "thing2"])

  function addItem(){
    setThingsArray(prevState =>{
      return [...prevState, `Thing ${prevState.length + 1}`]
    })
  }

 let thingsElement = thingsArray.map(thing => <p key={thing}>{thing}</p>)
  return (
    <div className="App">
      <button onClick={addItem}>Add Item</button>
      {thingsElement}
    </div>
  );
}

export default App;
