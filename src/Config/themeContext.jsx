import React, { useContext, useState } from 'react';

const ThemeContext = React.createContext();
const ThemeUpdateContext = React.createContext();

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const useThemeUpdate = () => {
  return useContext(ThemeUpdateContext);
};

function getPrefColorScheme() {
  if (!window.matchMedia);
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

function getInitialMode() {
  const isReturningUser = 'dark' in localStorage;
  const savedMode = JSON.parse(localStorage.getItem('dark'));
  const userPreferDark = getPrefColorScheme();
  // Mode tersimpan dark / light
  if (isReturningUser) {
    return savedMode;
  }
  if (userPreferDark) {
    return true;
  }
  return false;

  // return savedMode || false;
}

export const ThemeProvider = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(getInitialMode());

  const toggleTheme = () => {
    setDarkTheme((prevDarkTheme) => {
      return !prevDarkTheme;
    });
  };

  React.useEffect(() => {
    localStorage.setItem('dark', JSON.stringify(darkTheme));
  }, [darkTheme]);

  return (
    <ThemeContext.Provider value={darkTheme}>
      <ThemeUpdateContext.Provider value={toggleTheme}>
        {children}
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  );
};
