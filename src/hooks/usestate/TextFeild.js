import React, { useState } from "react";

/*
    In this example, the text state variable holds a string. 
    When you type, handleChange reads the latest input value 
    from the browser input DOM element, 
    and calls setText to update the state. 
    This allows you to display the current text below.
*/

export default function TextFeild(){
    const [text,setText] = useState('hello')

    function changeText(e){
        setText(e.target.value)
    }
    // e - object containing information about the event which has occured
    // usually addEventListener - click

    // function reset(){
    //     setText('hello')
    // }
    
    return(
        <div>
            <input value={text} onChange={changeText}/>
            <p>You Typed {text}</p>
            <button onClick={()=>setText('hello')}>Reset</button>
        </div>
    )
}