import React from 'react';
import Header from '../components/Header';
import Main from '../components/Main';
import PartyDetail from '../components/PartyDetail';

function PartyPage() {
  return (
    <>
      <Header />
      <Main>
        <PartyDetail />
      </Main>
    </>
  );
}

export default PartyPage;
