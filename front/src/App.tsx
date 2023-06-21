import { ThemeProvider, useMediaQuery } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { darkTheme, lightTheme } from './styles/theme';

import { Home } from './pages/Home';
import { Register } from './pages/Register';
import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const storedDarkMode = localStorage.getItem('darkMode');
  const initialDarkMode = storedDarkMode ? JSON.parse(storedDarkMode) : prefersDarkMode;
  const [darkMode, setDarkMode] = useState(initialDarkMode);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('darkMode', JSON.stringify(newDarkMode));
  };

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Routes>
        <Route path="/" element={ <Home toggleDarkMode={toggleDarkMode} /> } />
        <Route path="/register" element={ <Register toggleDarkMode={toggleDarkMode} /> } />
        <Route path="/edit/:id" element={ <Register toggleDarkMode={toggleDarkMode} /> } />
      </Routes>
    </ThemeProvider>
  )
}

export default App
