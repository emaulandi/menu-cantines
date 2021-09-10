import React from 'react';
import ReactDOM from 'react-dom';

import '@fontsource/roboto';
import '@fontsource/montserrat/700.css';
import '@fontsource/montserrat/600.css';
import '@fontsource/montserrat/500.css';

import { createTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';

import App from './App';

const theme = responsiveFontSizes(
  createTheme({
    palette: {
      primary: {
        main: '#0E103D',
        light: '#c1c3f1',
      },
      secondary: {
        main: '#9a46a0',
      },
    },
    typography: {
      h1: {
        fontWeight: 900,
      },
      h3: {
        fontWeight: 700,
      },
      h4: {
        fontWeight: 700,
        fontFamily: 'montserrat',
      },
      h5: {
        fontWeight: 600,
        fontFamily: 'montserrat',
      },
      h6: {
        fontWeight: 500,
        fontFamily: 'montserrat',
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
  document.getElementById('root'),
);
