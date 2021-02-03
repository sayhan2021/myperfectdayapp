import React from 'react';
import Navbar from './Components/navbar'
import Dashboard from './Components/dashboard'
import Card from './Components/card'
import './App.css';


function App() {
  return (
    <div className="App">
      <Navbar>
      <Dashboard>
          <div className="card-container"></div>
      <Card/>
      <Card/>
     </div>
    
    
  )
}

export default App;