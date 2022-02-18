import React from 'react';
import Main from '../components/Main';
import NewPartyHeader from '../components/NewPartyHeader';
import NewParty from '../components/NewParty';

function NewPartyPage() {
  return (
    <>
      <NewPartyHeader />
      <Main>
        <NewParty></NewParty>
      </Main>
    </>
  );
}

export default NewPartyPage;
