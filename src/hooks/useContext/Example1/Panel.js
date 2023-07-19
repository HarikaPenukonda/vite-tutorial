import React, { useContext } from "react";
import Button from "./Button";
import { ThemeContext } from "./MyApp";

export default function Panel(){
    const theme = useContext(ThemeContext)
    const className = 'panel'+theme
    return(
        <Button>
        </Button>
    )
}