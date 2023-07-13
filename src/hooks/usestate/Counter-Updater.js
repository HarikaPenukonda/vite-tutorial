import React, { useState } from "react";

/*
    Passing the updater function 
    This example passes the updater function, so the “+3” button works.
*/

export default function CounterUpdater(){
    const[age,setAge] = useState(20)

    function add(){
        setAge(age=>age+1)
    }
    return(
        <div>
            <h1>Your age:{age}</h1>
            <button 
                onClick={()=>{
                    add()
                    add()
                    add()
                }}>+3</button>
            <br/>
            <br/>
            <button onClick={add}>+1</button>
        </div>
        
    )
}