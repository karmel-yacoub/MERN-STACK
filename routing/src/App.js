import logo from './logo.svg';
import './App.css';
import {Router} from '@reach/router'
import Welcome from './components/Welcome';
import Number from './components/Number';
import Colored from './components/Colored';

function App() {
  return (
    <div className="App">
      <Router>
        <Welcome path="/home"/>
        <Number path="/:id"/>
        <Colored path="/:id/:color/:background"/>
      </Router>
    </div>
  );
}

export default App;
