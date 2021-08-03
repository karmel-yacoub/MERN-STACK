import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Router } from '@reach/router';
import Main from './views/Main';
import Details from './views/Details';
import UpdateProduct from './views/UpdateProduct';
function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/"/>
        <Details path="product/:id" />
        <UpdateProduct path="product/:id/edit"/>
      </Router>
    </div>
  );
}

export default App;
