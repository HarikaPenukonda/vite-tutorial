import React, { useState } from "react";
import Form from "./Form";

export const ThemeContext = React.createContext()

export default function MyApp(){
    const [theme,setTheme] = useState('light')
    return(
        <ThemeContext.Provider value={theme}>
            <Form/>
            <label>
                <input 
                type="checkbox"
                checked={theme==='dark'}
                onChange={e=>{
                    setTheme(e.target.checked ? 'dark' : 'light' )
                }}
                />
                Use Dark Mode
            </label>
        </ThemeContext.Provider>
        
    )
}