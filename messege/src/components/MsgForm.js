import React,{useState} from 'react'

const MsgForm = (props) => {
    const[msg,setMsg]=useState("");



const sendMsg=(e)=>{
    e.preventDefault();
    props.onMsg(msg);
}

    return (
        <div>
            <form onSubmit={sendMsg}>
            <h1>Set Message</h1>
            <textarea 
                rows="4"
                cols="50"
                // placeholder="Enter your message here"
                onChange={e=>setMsg(e.target.value)}
                value={msg}
                ></textarea>
                <input type="submit" value="Send Message" />
            </form>

        </div>
    )
}

export default MsgForm
