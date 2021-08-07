
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Form from '../Components/Form';
import ProductList from '../Components/ProductList';
const Main = () => {
    const[product, setProduct]=useState([]);
        useEffect(()=>{
            axios.get('http://localhost:8000/api/product')
            .then(res=>setProduct(res.data))
            .catch(err=>console.log("Error: ", err))
        },[])
    const removeFromDom = productId => {
        setProduct(product.filter(product => product._id !== productId));
        }
    const createProduct = person =>{
        axios.post('http://localhost:8000/api/person', person)
        .then(res=>{
            setProduct([...product, res.data]);
        })
    }
    return (
        <div>
            <Form onSubmitPrp={createProduct} initialTitle="" initialPrice="" initialDescription=""/>
            {/* <ProductList product={product}/> */}
            <hr/>
           {<ProductList product={product} removeFromDom={removeFromDom}/>}
        </div>
    )
}

export default Main

