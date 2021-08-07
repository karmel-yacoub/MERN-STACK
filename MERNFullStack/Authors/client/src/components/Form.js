// import React, {useState, useEffect} from 'react'
// import axios from 'axios';

// const Form = (props) => {
//     const{initialName} =props;
//     const [name, setName] = useState(initialName); 


//     const onSubmitHandler = e => {
//         e.preventDefult();
//         onSubmitProp({name});
//     }
//     return (
//         <>
//         <h1>Favorite Authors</h1>
//         <div>
//         <form onSubmit={onSubmitHandler}>
//             <p>
//                 <label>Name</label><br/>
//                 <input type="text" 
//                 name="name"
//                 onChange={(e)=>setName(e.target.value)} value={name}/>
//             </p>
//         </form>
//         </div>
//         </>
//     )
// }

// export default Form
