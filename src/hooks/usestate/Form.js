import React, { useState } from "react";

/*
    You can declare more than one state variable in the same component. Each state variable is completely independent.
*/

export default function Form(){
    const [name,setName] = useState('Harika')
    const [age,setAge] = useState(28)
    function handleChange(e){
        setName(e.target.value)
    }

    function addAge(){
        setAge(age + 1)
    }
    return(
        <div>
            <input
                value={name}
                onChange={handleChange}
            />
            <br/>
            <br/>
            <button onClick={addAge}>Increment</button>
            <p>Hi {name} you are {age} years old</p>
        </div>
    )
}