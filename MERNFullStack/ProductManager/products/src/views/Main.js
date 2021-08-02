// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import Form from '../Components/Form';
// import ProductList from '../Components/ProductList';
// export default () => {
//     const[product, setProduct]=useState([]);
//     const[loaded,setLoaded]=useState(false);
//     useEffect(()=>{
//         axios.get('http://localhost:8000/api/product')
//         .then(res=>setProduct(res.data))
//         .catch(err=>console.log("Error: ", err))
//     },[])
//     return (
//         <div>
//            <Form/>
//            {loaded && <ProductList product={product}/>}

//         </div>
//     )
// }

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
    return (
        <div>
            <Form/>
            <ProductList product={product}/>
        </div>
    )
}

export default Main

