import React, { useState } from 'react';
import Header from '../components/Header';
import Main2 from '../components/Main2';
import MyParties from '../components/Myparties';
import MyPartyHeader from '../components/MyPartyHeader';
import useMyParty from '../hooks/useMyParty';

function MyPartyPage() {
  const [isOnGoing, setIsOnGoing] = useState(true);
  const { parties } = useMyParty(isOnGoing);

  const toggleParties = () => setIsOnGoing(!isOnGoing);

  return (
    <>
      <Header />
      <Main2>
        {isOnGoing ? (
          <>
            <MyPartyHeader header={'참여 중인 파티 목록'} onClick={toggleParties} />
            <MyParties parties={parties} />
          </>
        ) : (
          <>
            <MyPartyHeader header={'종료된 파티'} onClick={toggleParties} />
            <MyParties parties={parties} />
          </>
        )}
      </Main2>
    </>
  );
}

export default MyPartyPage;
