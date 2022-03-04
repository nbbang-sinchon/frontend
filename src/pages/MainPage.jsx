import React from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Main from '../components/Main';
import Parties from '../components/Party/Parties';
import PartyHeader from '../components/Party/PartyHeader';
import useParty from '../hooks/useParty';
import usePartyUpdate from '../hooks/usePartyUpdate';

function MainPage() {
  const { search } = useParams();
  const { parties, setParties, option, setOption } = useParty(search);
  const detectorRef = usePartyUpdate(parties, setParties, option);

  return (
    <>
      <Header setOption={setOption} search={search} />
      <Main background="WHITE">
        <PartyHeader header={'파티 목록'} isFiltered setOption={setOption} />
        <Parties parties={parties} detectorRef={detectorRef} />
      </Main>
      <Footer />
    </>
  );
}

export default MainPage;
