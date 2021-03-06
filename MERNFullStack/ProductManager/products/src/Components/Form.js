import React, { useEffect, useState } from 'react'
import axios from 'axios';
export default props =>  {
    //keep track of what is being typed via useState hook
    const{initialTitle, initialPrice, initialDescription, onSubmitProp} =props;
    const [title, setTitle] = useState(initialTitle); 
    const [price, setPrice] = useState(initialPrice);
    const[description, setDescription] = useState(initialDescription);
    //handler when the form is submitted
    const onSubmitHandler = e => {
        //prevent default behavior of the submit
        e.preventDefault();
        //make a post request to create a new person
        // axios.post('http://localhost:8000/api/product', {
        //     title,
        //     price,
        //     description,
        onSubmitProp({title, price,description });
        }
            // .then(res=>console.log(res))
            // .catch(err=>console.log(err))

    //onChange to update firstName and lastName
    return (
        <>
        <h1>Product Manager</h1>
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Title</label><br/>
                <input type="text" onChange={(e)=>setTitle(e.target.value)} value={title}/>
            </p>
            <p>
                <label>Price</label><br/>
                <input type="number" onChange={(e)=>setPrice(e.target.value)} value={price}/>
            </p>
            <p>
                <label>Description</label><br />
                <input type="text" onChange={(e)=> setDescription(e.target.value)} value={description}></input>
            </p>
            <button type='submit'>click</button>
        </form>
        </>
    )
    }
