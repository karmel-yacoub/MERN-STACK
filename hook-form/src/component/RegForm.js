import React, { useState  } from 'react';

const RegForm = (props) => {
const [firstName, setFirstName] = useState ("");
const [lastName, setLastName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const[Confirmpassword, setConfirmPassword] = useState("");

const CreateUser= (e) =>{
     e.preventDefault();
     const newUser={firstName, lastName, email, password, Confirmpassword };
     console.log(newUser);
};
    return(
        <>
        <form onSubmit={CreateUser}>
            <div>
                <label>First Name</label>
                <input type="text" value= {firstName} onChange={(e) => setFirstName(e.target.value)}/>
            </div>
            <div>
                <label>Last Name</label>
                <input type='text' value={lastName} onChange={(e) => setLastName(e.target.value)}/>
            </div>
            <div>
                <label>Email</label>
                <input type='text' value={email} onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div>
                <label>Password</label>
                <input type='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <div>
                <label>Confirm Password</label>
                <input type='password' value={Confirmpassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
            </div>
        </form> 

        <div>
            <h2>Youre Form Data</h2>
            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <p>Confirm Password: {Confirmpassword}</p>
        </div>
   </>
);
};


export default RegForm;
