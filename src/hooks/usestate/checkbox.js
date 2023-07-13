import React, { useState } from "react";

/*
    In this example, the liked state variable holds a boolean. 
    When you click the input, setLiked updates the liked state variable 
    with whether the browser checkbox input is checked. 
    The liked variable is used to render the text below the checkbox.
*/

export default function Checkbox(){
    const [liked,setLiked] = useState(true)

    function handleChange(e){
        setLiked(e.target.checked)
    }
    
    return(
        <div>
            <label>
                <input 
                type="checkbox" 
                checked={liked}
                onChange={handleChange}
                />
                I liked this
            </label>
            <p>You {liked ? `liked` : `did not liked`} this</p>
            
        </div>
    )
}