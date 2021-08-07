import React, { useEffect, useState } from 'react'
import { Link } from '@reach/router';
import axios from 'axios';
import Button from './Button';

export default props => {
    const [author, setAuthor] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        axios.get('http://localhost:8000/api/author')
            .then(res => setAuthor(res.data));
    }, [])
    const removeFromDom = authorId => {
        setAuthor(author.filter(author => author._id !== authorId))
    }
    
    return (
        <>
        <h1>Favorite authors</h1>
        <div>
           
            <Link to={"/" + "/new"}>
                Add an author
            </Link>
            <p>We have qoutes by: </p>
            {author.map((author, idx) => {
                return (
                    <p key={idx}>
                        {author.name}
                        |
                       <Button authorId={author._id} successCallback={()=>removeFromDom(author._id)}/>
                        |
                        {/* <Link to = {'author'} >Edit</Link> */}
                    </p>
                )
            })}
            
        </div>
        </>
    )
}

