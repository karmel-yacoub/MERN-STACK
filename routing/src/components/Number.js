import React from 'react'

const Number = (props) => {
    let num = true;
    if (isNaN (+props.id)){
        num=false;
    }
    return (
        <div>
          {num ? <p>The Number is : {props.id}</p>:<p>The Word is:{props.id}</p>}  
        </div>
    )
}

export default Number
