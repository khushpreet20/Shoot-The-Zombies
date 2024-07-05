import React, {useState} from 'react'
import { ThemeContext } from './theme'

function ThemeContextProvider({children}) {
    const [Theme, setTheme] = useState(null)
  return (
    <ThemeContext.Provider value={{Theme, setTheme}}>
        {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider