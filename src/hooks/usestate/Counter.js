import React, { useState } from "react";
/*
    Challaenge : In this example, the count state variable holds a number. Clicking the button increments it.
*/ 


export default function Counter(){
    const [count,setCount] = useState(0)

    // function increment(){
    //     setCount(count+1)
    // }
    return(
        <div>
            <button onClick={()=>setCount(count+1)}>Click Me!</button>
            <br/>
            <h3><span>You clicked me {count} times</span></h3>
        </div>
    )
}

