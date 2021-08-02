import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Router } from '@reach/router';
import Main from './views/Main';
import Details from './views/Details';
function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/"/>
        <Details path="product/:id" />
      </Router>
    </div>
  );
}

export default App;
