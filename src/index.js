import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';
import {
  StylesProvider,
  CssBaseline
} from '@material-ui/core';




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
