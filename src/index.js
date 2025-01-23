import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Weather from './Weather';
import reportWebVitals from './reportWebVitals';
import '@fortawesome/fontawesome-free/css/all.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
      </header>
    </div>
        <Weather />
        <footer>
          <p className="github-note">
      This project is open sourced on 
      <strong> 
        <a href="https://github.com/joanamorais13/react-weather-app"  target="_blank"
  rel="noopener noreferrer"
          > GitHub <i className="fa-brands fa-github"></i></a
      ></strong>
    </p>
        </footer>
        
  </React.StrictMode>
);


reportWebVitals();
