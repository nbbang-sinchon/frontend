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
  const [option, setOption] = useState({
    search,
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
      <Header setOption={setOption} search={search} />
      <Main isWhite>
        <PartyHeader header={'파티목록'} isFiltered setOption={setOption} />
        <Parties parties={parties} />
      </Main>
      <Footer />
    </>
  );
}

export default MainPage;
