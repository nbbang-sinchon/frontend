import React from 'react';
import Header from '../components/Header';
import Main from '../components/Main';
import Parties from '../components/Parties';

function MainPage() {
  return (
    <>
      <Header />
      <Main>
        <Parties />
      </Main>
    </>
  );
}

export default MainPage;
