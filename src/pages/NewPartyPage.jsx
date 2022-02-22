import React, { useState } from 'react';
import Main from '../components/Main';
import { SWAGGER_URL } from '../config';
import { NewPartyHeader, NewParty } from '../components/NewParty';
// import hashtagstringtolist from '../utils/hashtagstringtolist';

function NewPartyPage() {
  // const [newPartyID, SetNewPartyID] = useState({ paryId: null });
  const [newParty, SetNewParty] = useState({
    title: '',
    content: '',
    hashtags: [],
    place: 'SINCHON',
    goalNumber: 0,
  });

  const onChange = (event) => {
    const { value, name } = event.target;
    SetNewParty({
      ...newParty,
      [name]: value,
    });
  };

  const onClick = () => {
    SetNewParty({
      ...newParty,
      ['hashtags']: ['#야식', '#먹자'],
    });

    if (window.confirm('파티를 생성하시겠습니까?')) {
      fetch(`${SWAGGER_URL}/parties`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newParty),
      })
        .then((response) => response.json())
        .then((response) => console.log(response));
    } else {
      console.log('Error: ');
    }
  };

  return (
    <>
      <NewPartyHeader onClick={onClick} />
      <Main>
        <NewParty newparty={newParty} onChange={onChange} />
      </Main>
    </>
  );
}

export default NewPartyPage;
