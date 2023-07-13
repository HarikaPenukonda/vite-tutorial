import React from "react";
import { UserContext, EmailContext } from "./ComponentC";

export default function ComponentF(){
    return(
        <>
            <UserContext.Consumer>
                {
                    user => {
                        return (
                            <EmailContext>
                            {
                                email => {
                                    return(
                                        <div>
                                            User name {user}
                                            <br/>
                                             Email {email}
                                        </div>
                                    )
                                }
                            }
                                
                            </EmailContext>
                            
                        )
                        
                    }
                }
            </UserContext.Consumer>
        </>
    )
}