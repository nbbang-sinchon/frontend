import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Main from '../components/Main';
import PartyDetail from '../components/PartyDetail';
import Parties from '../components/Parties';
import Footer from '../components/Footer';
import { SWAGGER_URL } from '../config';
import { useParams } from 'react-router-dom';
import PartyHeader from '../components/PartyHeader';

function PartyPage() {
  const { id } = useParams();
  const [party, setParty] = useState();
  const [parties, setParties] = useState([]);

  useEffect(() => {
    const fetchParty = async () => {
      const res = await fetch(`${SWAGGER_URL}/parties/${id}`);
      const json = await res.json();

      setParties(json.data.parties);
      setParty(json.data);
    };

    fetchParty();
  }, [id]);

  return (
    <>
      <Header />
      <Main>
        <PartyDetail party={party} />
        <PartyHeader header={'다른 파티 목록'} isFiltered={false} />
        <Parties parties={parties} />
      </Main>
      <Footer />
    </>
  );
}

export default PartyPage;
