import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createGlobalStyle} from 'styled-components';

const GlobalStyle=createGlobalStyle`
    body{
      margin: 0;
      padding: 0;
      user-select:none
    }
`

ReactDOM.render(
  <React.StrictMode>
      <GlobalStyle/>
      <App />


  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
