import { initializeApp } from 'firebase/app';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.scss';
import reportWebVitals from './reportWebVitals';

initializeApp({
  apiKey: 'AIzaSyDkMRYsylELwrZLWu4XlBMvvQeVpZMViV0',
  authDomain: 'stottle-web.firebaseapp.com',
  projectId: 'stottle-web',
  storageBucket: 'stottle-web.appspot.com',
  messagingSenderId: '814577459797',
  appId: '1:814577459797:web:28dc22587c940e61c8eadc',
  measurementId: 'G-CSHBBRQ96C',
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
