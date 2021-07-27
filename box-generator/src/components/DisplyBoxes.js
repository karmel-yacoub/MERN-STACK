import React, {useState} from 'react'

const DisplyBoxes = (props) => {
    const {boxes}=props
    console.log("boxes",boxes)
    return (
        <>
        <div style={{display:"flex"}}>
           {
           boxes.map((value,index)=>{
               return(
                   <p key={index} style={{background:value[0],height:value[1]+"px",width:value[1]+"px",margin:"20px"}}></p>
               )
           })
           }
        </div>
        </>
    )
}

export default DisplyBoxes
