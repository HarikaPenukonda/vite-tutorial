import React from "react";
import { UserContext } from "./ComponentC";

export default function ComponentF(){
    return(
        <>
            <UserContext.Consumer>
                {
                    user => {
                        return <div> User Context value {user}</div>
                    }
                }
            </UserContext.Consumer>
        </>
    )
}