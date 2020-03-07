import React from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './classBasedComponent/Person';
import { HPerson } from './hookBasedFunction/HPerson';

function App() {
  return (
    <div className="App">
      <Person />
      <p>---------------------------------</p>
      <HPerson />
    </div>
  );
}

export default App;
