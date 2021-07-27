import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import DisplyBoxes from './components/DisplyBoxes';
import React, {useState} from 'react'


function App() {
const[colorin,setColorin]=useState([]);
  
  const onBox=(colorByUser)=>{
    setColorin([...colorin,colorByUser])
    console.log(colorin)
  }
  return (

    <div className="App">
      <Form setBox={onBox}/>
      <DisplyBoxes  boxes={colorin}/>
    </div>
  );
}

export default App;
