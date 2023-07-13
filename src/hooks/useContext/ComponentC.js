import React from "react";
import ComponentE from "./ComponentE";

export const UserContext = React.createContext()
export const EmailContext = React.createContext()

export default function ComponentC(){
    return(
        <>
        <UserContext.Provider value={'Harika'}>
        <EmailContext.Provider value={'penukondaharika@gmail.com'}>
            <ComponentE/>
        </EmailContext.Provider>
        </UserContext.Provider>
            
        </>
    )
}