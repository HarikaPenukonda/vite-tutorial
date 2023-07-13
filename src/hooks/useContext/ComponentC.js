import React from "react";
import ComponentE from "./ComponentE";

const UserContext = React.createContext()

export default function ComponentC(){
    return(
        <>
        <UserContext.Provider value={'Harika'}>
            <ComponentE/>
        </UserContext.Provider>
            
        </>
    )
}