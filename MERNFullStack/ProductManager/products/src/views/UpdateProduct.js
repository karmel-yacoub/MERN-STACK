import React, {useState, useEffect}from 'react'
import axios from 'axios';
import Form from '../Components/Form';


const UpdateProduct = (props) => {
    const { id } = props;
    const[product, setProduct] = useState();
    const[loaded, setLoaded] = useState();
    // const [title, setTitle] = useState('');
    // const [price, setPrice] = useState('');
    // const[description, setDescription] = useState('');
    useEffect(() => {
        axios.get('http://localhost:8000/api/product/' + id)
            .then(res => {
                setProduct(res.data);
                console.log(res.data)
                
                // setTitle(res.data.title);
                // setPrice(res.data.price);
                // setDescription(res.data.description);
            })
    }, [])
    const updateProdct = product => {
        // e.preventDefault();
        axios.put('http://localhost:8000/api/product/' + id, product) 
            // title,
            // price,
            // description,
        .then(res => console.log(res))
        }
    
            // .catch(err=>console.log('Error' , err))
    return (  
        <div>
            <h1>Update a Product</h1>
           {loaded &&( <Form 
            onSupmitProp={updateProdct}
            initialTitle={product.title}
            initialPrice={product.price}
            initailDescription={product.description}
            />

           { /* <form onSubmit={updateProdct}>
                <p>
                    <label>Title</label><br />
                    <input type="text" 
                    name="title" 
                    value={title} 
                    onChange={(e) => { setTitle(e.target.value) }} />
                </p>
                <p>
                    <label>Price</label><br />
                    <input type="number" 
                    name="price"
                    value={price} 
                    onChange={(e) => { setPrice(e.target.value) }} />
                </p>
                <p>
                    <label>Description</label><br />
                    <input type ="text"
                    name="description"
                    value={description}
                    onChange={(e) =>{setDescription(e.target.value) }} />
                </p>
                <button type="submit"> Click </button>
           </form> */}

        </div>
    )}

export default UpdateProduct;
