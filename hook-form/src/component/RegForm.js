import React, { useState  } from 'react';

const RegForm = (props) => {
    const [firstName, setFirstName] = useState ("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [Confirmpassword, setConfirmPassword] = useState("");
    const [firstNameError, setfirstNameError] = useState("");
    const [lastNameError, setlastNameError] = useState("");
    const [emailError, setEmailError]=useState("");
    const [passwordError,setPasswordError]=useState("");



    const CreateUser= (e) =>{
        e.preventDefault();
        const newUser={firstName, lastName, email, password, Confirmpassword };
        console.log(newUser);
    };
    const handlefirstName = (e) => {
        setFirstName(e.target.value);
        if(e.target.value.length < 2 && e.target.value.length > 0) {
            setfirstNameError("first name must be at least 2 characters");
        } else {
        setfirstNameError("");
        }
    }
        const handlelastName=(e)=>{
        setLastName(e.target.value);
        if(e.target.value.length < 2) {
            setlastNameError("last name must be at least 2 characters");
        } else {
            setlastNameError("");
        }
    }
    const handleEmail=(e)=>{
        setEmail(e.target.value);
        if(e.target.value.length < 5) {
            setEmailError("Email must be at least 5 characters.");
        } else {
            setEmailError("");
        }
    }
    const handlePassword=(e)=>{
        setPassword(e.target.value);
        if(e.target.value.length < 8 && e.target.value.length > 0 ) {
            setPasswordError("Passowrd must be at least 8 characters.");
        } else {
            setPasswordError("");
        }
    }
    return(
        <div>
        <form onSubmit={CreateUser}>
            <div>
                <label>First Name</label>
                <input type="text" value= {firstName} onChange={handlefirstName}/>
                {
                    firstNameError ?
                    <p style={{color:'red'}}>{ firstNameError }</p> : ''
                }
            </div>
            <div>
                <label>Last Name</label>
                <input type='text' value={lastName} onChange={handlelastName}/>
                {
                    lastNameError ?
                    <p style={{color:'red'}}>{ lastNameError }</p> : ''
                }
            </div>
            <div>
                <label>Email</label>
                <input type='text' value={email} onChange={handleEmail}/>
                {
                    emailError ?
                    <p style={{color:'red'}}>{ emailError }</p> : ''
                }
            </div>
            <div>
                <label>Password</label>
                <input type='password' value={password} onChange={handlePassword}/>
                {
                    passwordError ?
                    <p style={{color:'red'}}>{ passwordError }</p> : ''
                }
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
   </div>
    );
            }


export default RegForm;
