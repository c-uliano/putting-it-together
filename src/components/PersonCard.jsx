import React, { useState } from 'react';

const PersonCard = (props) => {
    const [age, setAge] = useState(props.age);

    const buttonClick = () => {
        setAge(age + 1);
    }

    return (
        <div className='card m-3 p-3'>
            <h2>{props.lastName}, {props.firstName}</h2>
            <p>Age: {age}</p>
            <p>Hair Color: {props.hairColor}</p>
            <button className='btn btn-primary w-50' onClick={buttonClick}>Birthday Button for {props.firstName}</button>
        </div>
    )
}

export default PersonCard