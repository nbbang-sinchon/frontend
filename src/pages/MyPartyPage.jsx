import React, { useState } from 'react';
import Header from '../components/Header';
import Main2 from '../components/Main2';
import MyParties from '../components/MyParty/MyParties';
import MyPartyHeader from '../components/MyParty/MyPartyHeader';
import MyClosedParties from '../components/MyParty/MyClosedparties';
import useMyParty from '../hooks/useMyParty';

function MyPartyPage() {
  const [isOnGoing, setIsOnGoing] = useState(true);
  const { parties } = useMyParty(isOnGoing);

  const toggleParties = () => setIsOnGoing((prev) => !prev);

  return (
    <>
      <Header />
      <Main2>
        {isOnGoing ? (
          <>
            <MyPartyHeader onClick={toggleParties} toggle={isOnGoing} />
            <MyParties parties={parties} />
          </>
        ) : (
          <>
            <MyPartyHeader onClick={toggleParties} toggle={isOnGoing} />
            <MyClosedParties parties={parties} />
          </>
        )}
      </Main2>
    </>
  );
}

export default MyPartyPage;
