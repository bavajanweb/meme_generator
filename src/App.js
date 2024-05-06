import logo from './logo.svg';
import './App.css';

import React from 'react'

function App() {

  let [count, setCount] = React.useState(0)

  function add(){
    setCount(count = count + 1)
  }

  function sub(){
    setCount(count-1)
  }
  return (
    <div className="App">
      <button className='counter-minus' onClick={sub}>-</button>
      <div className='counter-count'>
        <h1>{count}</h1>
      </div>
      <button onClick={add} className='counter-plus'>+</button>
    </div>
  );
}

export default App;
