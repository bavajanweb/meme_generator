import logo from './logo.svg';
import img from './images/trollface.png'
import './App.css';

import React from 'react'

function App() {

 const [contact , setContact] = React.useState({
  firstName: 'John',
  secondName: 'Doe',
  phoneNumebr: '+703220536',
  email: 'jhondoe123@hotmail.com'
 })
  return (
    <div className='card'>
   <div className='contact'>
  <img src={img} className='img'/>
  <h1>{contact.firstName} {contact.secondName}</h1>
  <h6>{contact.phoneNumebr}</h6>
  <p>{contact.email}</p>
   </div>
   </div>
  );
}

export default App;
