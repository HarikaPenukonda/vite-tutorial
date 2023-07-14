import React, {useContext} from "react";
import ComponentF from "./ComponentF";
import { UserContext, EmailContext } from "./ComponentC";

export default function ComponentE(){

    const user = useContext(UserContext)
    const email = useContext(EmailContext)
    return(
        <>
         <ComponentF/>
            <div>
                <h3>{user} </h3>
                <h3>{email}</h3> 
                
            </div>
        </>
    )
}