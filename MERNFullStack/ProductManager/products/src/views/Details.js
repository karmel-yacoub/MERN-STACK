import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Details = (props) => {
    const [product, setProduct]=useState({})
    useEffect(()=>{
        axios.get("http://localhost:8000/api/product/" + props.id)
        .then(res => setProduct(res.data))
    },[])
    return (
        <div>
           <h2>{product.title}</h2>
           <p>Price: {product.price}</p>
           <p>Description:{product.description}</p>
        </div>
    )
}

export default Details
