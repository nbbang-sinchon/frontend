import React from 'react';
import Main from '../components/Main';
import CreatePartyHeader from '../components/CreatePartyHeader';
import CreateParty from '../components/CreateParty';
function CreatePartyPage() {
  return (
    <>
      <CreatePartyHeader />
      <Main>
        <CreateParty />
      </Main>
    </>
  );
}

export default CreatePartyPage;
