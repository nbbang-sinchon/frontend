import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Main from '../components/Main';
import PartyDetail from '../components/PartyDetail';
import Parties from '../components/Parties';
import Footer from '../components/Footer';
import PartyHeader from '../components/PartyHeader';
import usePartyDetail from '../hooks/usePartyDetail';
import PartyDetailHeader from '../components/PartyDetailHeader';

function PartyPage() {
  const { id } = useParams();
  const { party, parties } = usePartyDetail(id);

  return (
    <>
      <Header />
      <Main>
        <PartyDetailHeader party={party} isPartyPage />
        <PartyDetail party={party} />
        <PartyHeader header={'다른 파티 목록'} isFiltered={false} />
        <Parties parties={parties} />
      </Main>
      <Footer />
    </>
  );
}

export default PartyPage;
