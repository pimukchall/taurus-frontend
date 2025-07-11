'use client';

import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import customTheme from '../../lib/theme';

const MuiThemeProviderWrapper = ({ children }) => {
  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default MuiThemeProviderWrapper;
