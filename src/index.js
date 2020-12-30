import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {JokeProvider} from './konteksti';

ReactDOM.render(
  <React.StrictMode>
    <JokeProvider>
    <App />
    </JokeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
