import React from 'react';
import ReactDOM from 'react-dom';

import { createTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';

import App from './App';

const theme = responsiveFontSizes(
  createTheme({
    palette: {
      primary: {
        main: '#4E0250',
        contrastText: '#fff',
      },
    },
  }),
);

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
