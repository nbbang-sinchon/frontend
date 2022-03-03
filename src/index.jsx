import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import Reset from './styles/Reset';
import IndexPage from './pages/IndexPage';
import MyPage from './pages/MyPage';
import PartyPage from './pages/PartyPage';
import ChatPage from './pages/ChatPage';
import MyPartyPage from './pages/MyPartyPage';
import NewPartyPage from './pages/NewPartyPage';
import ValidationRoute from './components/ValidationRoute';
import isLogin from './utils/isLogin';

ReactDOM.render(
  <BrowserRouter>
    <Reset />
    <Routes>
      <Route element={<ValidationRoute filter={!isLogin()} fallback="/main" />}>
        <Route path="/" element={<IndexPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Route>

      <Route element={<ValidationRoute filter={isLogin()} fallback="/" />}>
        <Route path="/main" element={<MainPage />} />
      </Route>

      <Route element={<ValidationRoute filter={isLogin()} fallback="/login" />}>
        <Route path="/" element={<IndexPage />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/my-party" element={<MyPartyPage />} />
        <Route path="/chats/:id" element={<ChatPage />} />
        <Route path="/newparty" element={<NewPartyPage />} />
      </Route>

      <Route path="/main/:search" element={<MainPage />} />
      <Route path="/parties/:id" element={<PartyPage />} />
      <Route path="/newparty/:id" element={<NewPartyPage />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root'),
);
