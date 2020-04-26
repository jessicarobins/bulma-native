import React from 'react';
import theme from './variables';

export type Theme = typeof theme;

export const ThemeContext = React.createContext(theme);

export default ThemeContext.Provider;
