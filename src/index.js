import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from 'App';
import {
  StylesProvider,
  ThemeProvider as MuiThemeProvider,
  createMuiTheme,
  responsiveFontSizes,
  CssBaseline
} from '@material-ui/core';
import { ThemeProvider } from 'styled-components';

// const kushTheme = responsiveFontSizes(
//   createMuiTheme({
//     palette: {
//       primary: { main: '#dc823d', contrastText: '#fff' },
//       text: {
//         primary: '#576767',
//         secondary: '#4e5c5c'
//       }
//     },
//     typography: {
//       fontFamily: '"Montserrat", "Helvetica", "Arial", sans-serif'
//     }
//   })
// );

ReactDOM.render(
  <StylesProvider injectFirst>
    <CssBaseline />
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </StylesProvider>,
  document.getElementById('root')
);
