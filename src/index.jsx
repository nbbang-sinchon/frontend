import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Reset from './styles/Reset';

ReactDOM.render(
  <React.StrictMode>
    <Reset />
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
