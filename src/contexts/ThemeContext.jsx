import { createContext, useContext, useEffect } from 'react'

const ThemeContext = createContext()

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider')
  }
  return context
}

export const ThemeProvider = ({ children }) => {
  useEffect(() => {
    const root = window.document.documentElement
    // Force a single, always-on dark theme
      root.classList.add('dark')
  }, [])

  const toggleTheme = () => {
    // Theme toggling disabled: single theme mode
  }

  return (
    <ThemeContext.Provider value={{ isDark: true, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

