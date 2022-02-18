import React from 'react';
import Main from '../components/Main';
import { LoginPageHeader, Login } from '../components/Login';

function LoginPage() {
  return (
    <>
      <LoginPageHeader />
      <Main>
        <Login />
      </Main>
    </>
  );
}

export default LoginPage;
