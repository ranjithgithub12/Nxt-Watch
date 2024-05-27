import React from 'react'

const ThemeContext = React.createContext({
  isDarkTheme: true,
  changeTheme: () => {},
})

export default ThemeContext
