import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Index from '../components/Index';
import Main from '../components/Main';
import Parties from '../components/Parties';
import Footer from '../components/Footer';
import PartyHeader from '../components/PartyHeader';
import { SWAGGER_URL } from '../config';

function IndexPage() {
  const [parties, setParties] = useState([]);
  const [option] = useState({
    OPEN: true,
    WISHLIST: false,
    place: {
      SINCHON: true,
      YEONHUI: true,
      CHANGCHEON: true,
    },
  });

  useEffect(() => {
    const fetchParties = async () => {
      const params = [];

      if (option.search) {
        params.push(`search=${option.search}`);
      }

      params.push(`status=OPEN`);
      if (!option.OPEN) {
        params.push(`status=CLOSED`);
        params.push(`status=FULL`);
      }

      const placeKeys = Object.keys(option.place);

      if (placeKeys.length === 0) {
        params.push(`place=NONE`);
      } else {
        placeKeys.forEach((place) => {
          if (option.place[place]) {
            params.push(`place=${place}`);
          }
        });
      }

      const res = await fetch(`${SWAGGER_URL}/parties?${params.join('&')}`);
      const json = await res.json();

      setParties(json.data.parties);
    };

    fetchParties();
  }, [option]);

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
