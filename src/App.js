import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Form from './components/Form';






function App() {
  return (
    <Router>
      <div className="App">
     <Navbar/>
     <Form/>
      </div>
    </Router>
  );
}

export default App;
