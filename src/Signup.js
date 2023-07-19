import React from "react";

export default function Signup(){
    return(
        <div className="wrapper">
            <h1 className="sign-head">Sign Up</h1>
            <form className="signup-form"action="#">
                <input type="text" placeholder="Username"/>
                <input type="text" placeholder="Name"/>
                <input type="password" placeholder="Password"/>
                <input type="password" placeholder="Confirm Password"/>
            </form>
            <div className="terms">
                <input type="checkbox" id="checkbox"/>
                <label for="checkbox">I agree to these <a href="#">Terms & Conditions</a></label>
            </div>
            <button className="signup-button">Sign Up</button>
            <div className="member">
                Already a member? <a href="./login.js">Login Here</a>
            </div>
        </div>
    )
    
}