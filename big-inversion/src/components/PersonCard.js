import React from 'react'

const PersonCard = (props) => {
    return (
        <div>
            <h1>{props.firstName}{props.lastName}</h1>
            <p>{props.Age}</p>
            <p>{props.hairColor}</p>
        </div>
    )
}

export default PersonCard
