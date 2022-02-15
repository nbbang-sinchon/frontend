import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import Reset from './styles/Reset';
import IndexPage from './pages/IndexPage';
import MyPage from './pages/MyPage';
import PartyPage from './pages/PartyPage';
import ChattingPage from './pages/ChattingPage';
import MyPartyPage from './pages/MyPartyPage';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Reset />
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/party" element={<PartyPage />} />
        <Route path="/my-party" element={<MyPartyPage />} />
        <Route path="/chatting" element={<ChattingPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
