import React from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Main from '../components/Main';
import Parties from '../components/Parties';
import PartyHeader from '../components/PartyHeader';
import useParties from '../hooks/useParties';
import usePartiesUpdate from '../hooks/usePartiesUpdate';

function MainPage() {
  const { search } = useParams();
  const { parties, setParties, option, setOption } = useParties(search, true);
  const detectorRef = usePartiesUpdate(parties, setParties, option);

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
