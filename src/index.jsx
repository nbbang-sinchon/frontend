import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Login from './pages/Login';
import Reset from './styles/Reset';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Reset />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
