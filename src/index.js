import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './app';
import {GlobalStyles} from './global-styles';
import 'normalize.css';

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <>
      <GlobalStyles />
      <App />
    </>
  </React.StrictMode>
);
