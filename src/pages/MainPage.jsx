import React from 'react';
import Footer from '../components/Footer';
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
      <Footer />
    </>
  );
}

export default MainPage;
