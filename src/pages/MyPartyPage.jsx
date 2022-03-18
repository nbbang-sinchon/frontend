import React, { useState } from 'react';
import Header from '../components/Header';
import Main from '../components/Main';
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
      <Main isMyPartyPage>
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
      </Main>
    </>
  );
}

export default MyPartyPage;
