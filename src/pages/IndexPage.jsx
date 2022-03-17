import React from 'react';
import Header from '../components/Header';
import Index from '../components/Index';
import Main from '../components/Main';
import Parties from '../components/Party/Parties';
import PartyHeader from '../components/Party/PartyHeader';
import useParty from '../hooks/useParty';

function IndexPage() {
  const { parties } = useParty();

  return (
    <>
      <Header />
      <Index />
      <Main background="WHITE">
        <PartyHeader header={'파티 목록'} />
        <Parties parties={parties} />
      </Main>
    </>
  );
}

export default IndexPage;
