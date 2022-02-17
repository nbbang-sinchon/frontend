import React from 'react';
import Header from '../components/Header';
import Main from '../components/Main';
import PartyDetail from '../components/PartyDetail';
import Parties from '../components/Parties';
import Footer from '../components/Footer';

function PartyPage() {
  return (
    <>
      <Header />
      <Main>
        <PartyDetail />
        <Parties />
      </Main>
      <Footer />
    </>
  );
}

export default PartyPage;
