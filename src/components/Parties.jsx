import React, { useState } from 'react';
import styled from '@emotion/styled';
import Party from './Party';
import dummyParties from '../dummies/dummyParties';

const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;

  padding: 10px;

  ::after {
    content: '';
    width: 300px;
    margin: 10px;
  }
`;

function Parties() {
  const [parties] = useState(dummyParties);

  return (
    <Container>
      {parties.map((party) => (
        <Party
          key={party.id}
          title={party.title}
          hashtags={party.hashtags}
          place={party.place}
          createTime={party.createTime}
          status={party.status}
          joinNumber={party.joinNumber}
          goalNumber={party.goalNumber}
        />
      ))}
    </Container>
  );
}

export default Parties;
