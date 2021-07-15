import logo from './logo.svg';
import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
     <PersonCard firstName = "Doe" lastName="jane" Age ={45} hairColor = "black"/>
     <PersonCard firstName="Smith" lastName="John" Age={88} hairColor="Brown"/>
     <PersonCard firstName="Fillmore" lastName="Millard" Age={50} hairColor="Brown"/>
     <PersonCard firstName="Smith" lastName="Maria" Age={62} hairColor="Brown"/>
    
     
    </div>
   
  );
}

export default App;
