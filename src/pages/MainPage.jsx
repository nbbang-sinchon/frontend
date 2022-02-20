import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Main from '../components/Main';
import Parties from '../components/Parties';
import PartyHeader from '../components/PartyHeader';
import { SWAGGER_URL } from '../config';

function MainPage() {
  const { search } = useParams();
  const [parties, setParties] = useState([]);

  useEffect(() => {
    const fetchParties = async () => {
      const res = await fetch(`${SWAGGER_URL}/parties?search=${search || ''}`);
      const json = await res.json();

      setParties(json.data.parties);
    };

    fetchParties();
  }, [search]);

  return (
    <>
      <Header search={search} />
      <Main isWhite>
        <PartyHeader header={'파티목록'} isFiltered />
        <Parties parties={parties} />
      </Main>
      <Footer />
    </>
  );
}

export default MainPage;
