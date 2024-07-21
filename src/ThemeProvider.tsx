import React, { createContext, useState } from 'react';
import defaultTheme from './defaultTheme';

export const ThemeContext = createContext(defaultTheme);

export const ThemeProvider = ({ children, theme }: { children: React.ReactNode, theme: CustomTheme }) => {
  const [currentTheme, setCurrentTheme] = useState({ ...defaultTheme, ...theme });

  return (
    <ThemeContext.Provider value={currentTheme}>
      {children}
    </ThemeContext.Provider>
  );
};