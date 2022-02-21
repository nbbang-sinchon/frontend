import React, { useState } from 'react';
import Main from '../components/Main';
import { SWAGGER_URL } from '../config';
import { NewPartyHeader, NewParty } from '../components/NewParty';
import hashtagstringtolist from '../utils/hashtagstringtolist';

function NewPartyPage() {
  const [newPartyID, SetNewPartyID] = useState({ paryId: null });
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
    let message = confirm('파티를 생성하겠습니까?');

    if (message) {
      SetNewParty({
        ...newParty,
        ['hashtags']: hashtagstringtolist(newParty['hashtags']),
      });

      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newParty),
      };

      fetch(`${SWAGGER_URL}/parties`, requestOptions)
        .then((response) => response.json())
        .then((data) => SetNewPartyID({ paryId: data.id }));
    } else {
      console.log(newPartyID);
      return;
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
