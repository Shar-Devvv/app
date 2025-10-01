// app/context/ThemeContext.js 

"use client"; // Needs to be a Client Component to use state

import React, { createContext, useState, useContext, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    // Default to 'light' or load from local storage
    const [theme, setTheme] = useState('light'); 

    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    // Optional: Apply the theme class to the document body
    useEffect(() => {
        document.body.className = theme;
        // You would apply light/dark classes here (e.g., 'bg-white' or 'bg-gray-900')
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);