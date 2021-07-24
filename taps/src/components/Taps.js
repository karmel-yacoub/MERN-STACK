import React, {useState} from 'react';

const Taps = () => {
    const taps=["Tap 1","Tap 2","Tap 3"];
    const [msg,setMsg]=useState("");

    const clickhandler=(e,value,i)=>{
        e.preventDefault();
        setMsg(value+" was taped ");
    }
    return (
        <div>
            {
                taps.map((value,i)=>{
                   return <button key={i} onClick={(e)=> clickhandler(e,value,i)}>{value}</button>
                })
            }
            <p>{msg}</p>
        </div>
    )
}

export default Taps
