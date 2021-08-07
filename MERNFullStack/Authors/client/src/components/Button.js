import React, {useState,useEffect}from 'react'
import axios from 'axios';
const Button = (props) => {
    const { authorId, successCallback } = props;
    const deleteAuthor = e => {
        axios.delete('http://localhost:8000/api/author/' + authorId)
            .then(res=>{
                successCallback();
            })
    }
    return (
            <button onClick={deleteAuthor }>
                Delete
            </button>
    )
}

export default Button
