import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PrivateLoginRoute from './components/PrivateLoginRoute';
import PrivateIndexRoute from './components/PrivateIndexRoute';
import PublicRoute from './components/PublicRoute';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import Reset from './styles/Reset';
import IndexPage from './pages/IndexPage';
import MyPage from './pages/MyPage';
import PartyPage from './pages/PartyPage';
import ChatPage from './pages/ChatPage';
import MyPartyPage from './pages/MyPartyPage';
import NewPartyPage from './pages/NewPartyPage';

ReactDOM.render(
  <BrowserRouter>
    <Reset />
    <Routes>
      <Route
        path="/"
        element={
          <PublicRoute>
            <IndexPage />
          </PublicRoute>
        }
      />
      <Route
        path="/login"
        element={
          <PublicRoute>
            <LoginPage />
          </PublicRoute>
        }
      />
      <Route
        path="/main"
        element={
          <PrivateIndexRoute>
            <MainPage />
          </PrivateIndexRoute>
        }
      />
      <Route path="/main/:search" element={<MainPage />} />
      <Route
        path="/mypage"
        element={
          <PrivateLoginRoute>
            <MyPage />
          </PrivateLoginRoute>
        }
      />
      <Route path="/parties/:id" element={<PartyPage />} />
      <Route
        path="/my-party"
        element={
          <PrivateLoginRoute>
            <MyPartyPage />
          </PrivateLoginRoute>
        }
      />
      <Route
        path="/chats/:id"
        element={
          <PrivateLoginRoute>
            <ChatPage />
          </PrivateLoginRoute>
        }
      />
      <Route
        path="/newparty"
        element={
          <PrivateLoginRoute>
            <NewPartyPage />
          </PrivateLoginRoute>
        }
      />
      <Route path="/newparty/:id" element={<NewPartyPage />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root'),
);
