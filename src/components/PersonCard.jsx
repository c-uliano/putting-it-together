import React from 'react'

const PersonCard = (props) => {
    return (
        <div className='card m-3 p-3'>
            <h2>{props.lastName}, {props.firstName}</h2>
            <p>Age: {props.age}</p>
            <p>Hair Color: {props.hairColor}</p>
        </div>
    )
}

export default PersonCard