import React, { createContext, useState } from 'react'

export const ThemeContext = createContext()

export default function ContextApi(props) {

    const [temps, setTemps] =useState([]);
  
    return (
    
        <ThemeContext.Provider value={{temps, setTemps}}>
            {props.children}
        </ThemeContext.Provider>
    )
}
