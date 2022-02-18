import React from 'react';
import Main from '../components/Main';
import { NewPartyHeader, NewParty } from '../components/NewParty';

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
