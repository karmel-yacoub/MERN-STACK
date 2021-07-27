import logo from './logo.svg';
import './App.css';
import MsgForm from './components/MsgForm';
import DisplyMsg from './components/DisplyMsg';
import {useState} from 'react';
function App() {
const [message,setMessage]=useState([]);

  const newMsg =(msg)=>{
    setMessage(msg);

  }


  return (
    <div className="App">
      <MsgForm onMsg={newMsg}/>
      <DisplyMsg mess={message}/>
    </div>
  );
}

export default App;
