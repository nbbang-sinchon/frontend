import React from 'react';
import { useParams } from 'react-router-dom';
import Main from '../components/Main';
import NewParty from '../components/NewParty';
import usePartyDetail from '../hooks/usePartyDetail';

function NewPartyPage() {
  const { id } = useParams();
  const { party } = usePartyDetail(id);

  return (
    <>
      <Main background="WHITE">{id ? <NewParty id={id} party={party} /> : <NewParty />}</Main>
    </>
  );
}

export default NewPartyPage;
