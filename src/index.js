import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './fonts/ageo/Ageo.otf';
import './fonts/august/August-Bold.ttf';
import './fonts/strasse/Strasse.ttf'
import './fonts/playfairdisplay/PlayfairDisplay.ttf'
import './fonts/azonix/Azonix.otf';
import './fonts/leyton/Leyton-Bold.otf';
import './fonts/zillaslab/ZillaSlab-Regular.ttf';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
