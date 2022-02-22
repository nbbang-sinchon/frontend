import React, { useState } from 'react';
import Main from '../components/Main';
import { SWAGGER_URL } from '../config';
import NewPartyHeader from '../components/NeaPartyHeader';
import NewParty from '../components/NewParty';
import hashTagStringToList from '../utils/hashtagstringtolist';

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
    console.log(hashTagStringToList(newParty['hashtags']));

    SetNewParty({
      ...newParty,
      ['hashtags']: hashTagStringToList(newParty['hashtags']),
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
        .then((response) => {
          console.log(response);
        });
    } else {
      console.log('파티 만들기 취소');
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
