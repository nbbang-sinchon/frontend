import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Main from '../components/Main';
import PartyDetail from '../components/Party/PartyDetail';
import Parties from '../components/Party/Parties';
import PartyHeader from '../components/Party/PartyHeader';
import usePartyDetail from '../hooks/usePartyDetail';
import PartyDetailHeader from '../components/Party/PartyDetailHeader';

function PartyPage() {
  const { id } = useParams();
  const { party, parties } = usePartyDetail(id);

  return (
    <>
      <Header />
      <Main isPartyPage>
        <PartyDetailHeader party={party} isPartyPage />
        <PartyDetail party={party} />
        <PartyHeader header={'다른 파티 목록'} isFiltered={false} />
        <Parties parties={parties} />
      </Main>
    </>
  );
}

export default PartyPage;
