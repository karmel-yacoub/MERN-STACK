// import React from 'react'

// function NewAuthor() {
//     const { id } = props;
//     const [person, setPerson] = useState();
//     const [loaded, setLoaded] = useState(false);
//     useEffect(() => {
//         axios.get('http://localhost:8000/api/person/' + id)
//             .then(res => {
//                 setPerson(res.data);
//                 setLoaded(true);
//             })
//     }, [])
//     const updatePerson = person => {
//         axios.put('http://localhost:8000/api/person/' + id, person)
//             .then(res => console.log(res));
//     }
//     return (
//         <div>
            
//         </div>
//     )
// }

// export default NewAuthor
