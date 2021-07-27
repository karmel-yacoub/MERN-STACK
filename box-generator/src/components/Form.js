import React, {useState} from 'react'

const Form = (props) => {
    const[color,setColor]=useState("");
    const[size,setSize]=useState("");


    const addColoredbox=(e)=>{
        e.preventDefault();
        props.setBox([color,size]);
        console.log(color);
        setColor("");
        setSize("");

    };

    return (
    
    <div >
        <form onSubmit={addColoredbox}>
             <div>
                <lable>Color</lable>
                <input type="text" onChange={(e)=>setColor(e.target.value)} value={color} ></input>
             </div>
             <div>
                <lable>Size</lable>
                <input type="text" onChange={(e)=>setSize(e.target.value)} value={size} ></input>
             </div>
             <input type="submit" value="Add"/>
        </form>   
    </div>
        
    )
}

export default Form
