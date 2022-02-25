import React from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Main from '../components/Main';
import Parties from '../components/Parties';
import PartyHeader from '../components/PartyHeader';
import useParties from '../hooks/useParties';

function MainPage() {
  const { search } = useParams();
  const { parties, setOption } = useParties(search);

  return (
    <>
      <Header setOption={setOption} search={search} />
      <Main background="WHITE">
        <PartyHeader header={'파티 목록'} isFiltered setOption={setOption} />
        <Parties parties={parties} />
      </Main>
      <Footer />
    </>
  );
}

export default MainPage;
