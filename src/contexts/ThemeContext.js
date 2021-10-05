import { useState, createContext } from 'react';

const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  return (
    <ThemeContext.Provider value={{ isDarkTheme, setIsDarkTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
