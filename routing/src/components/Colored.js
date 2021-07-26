import React from 'react'

const Colored = (props) => {
    let num=true;
    if (isNaN (+props.id)){
        num =false;
    }
    const styling = {
        color:props.color,
        background:props.background,
    }
    return (
        <div style={styling}>
           {num?<p>The Number is : {props.id}</p>:<p>The Word is:{props.id}</p>} 
        </div>
    )
}

export default Colored
