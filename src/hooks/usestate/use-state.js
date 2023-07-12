import React, { useState } from "react";

export default function UseStateHook(){
    const [count,setCount] = useState(4)

    // function decrementCount(){
    //     setCount(count-1)
    // }
    function decrementCount(){
        setCount(prevCount=>prevCount - 1)
        // pass a function and function takes the previous state value
    }
    function incrementCount(){
        setCount(prevCount=>prevCount + 1)
    }
    return(
        <div>
            <button onClick={decrementCount}>-</button>
            <span>{count}</span>
            <button onClick={incrementCount}>+</button>
        </div>
    )
}