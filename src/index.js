import React from 'react';
import {createRoot} from 'react-dom/client';
import {App} from './app';
import {GlobalStyles} from './global-styles';
import 'normalize.css';
import { firebaseDb } from './lib/firebase.prod';
import { FirebaseContext } from './context/firebase';

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <>
      <FirebaseContext.Provider value={{ firebase: firebaseDb }}>
        <GlobalStyles />
        <App />
      </FirebaseContext.Provider>
    </>
  </React.StrictMode>
);
