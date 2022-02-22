import React from 'react';
import Header from '../components/Header';
import Index from '../components/Index';
import Main from '../components/Main';
import Parties from '../components/Parties';
import Footer from '../components/Footer';
import PartyHeader from '../components/PartyHeader';
import useParties from '../hooks/useParties';

function IndexPage() {
  const { parties } = useParties();

  return (
    <>
      <Header />
      <Index />
      <Main isWhite>
        <PartyHeader header={'파티 목록'} />
        <Parties parties={parties} />
      </Main>
      <Footer />
    </>
  );
}

export default IndexPage;
