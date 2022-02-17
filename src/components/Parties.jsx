import styled from '@emotion/styled';
import React, { useState } from 'react';
import Party from './Party';
import dummyParties from '../dummies/dummyParties';
import { SIZES } from '../styles/constants';

const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;

  padding: 10px;

  > div,
  ::after {
    padding: 10px;
    width: 340px;
    box-sizing: border-box;

    @media only screen and (min-width: ${SIZES.MIDDLE_WIDTH}) {
      min-width: 250px;
      width: 45%;
    }
  }

  ::after {
    content: '';
  }
`;

function Parties() {
  const [parties] = useState(dummyParties);

  return (
    <Container>
      {parties.map((party) => (
        <Party
          key={party.partyId}
          title={party.title}
          hashtags={party.hashtags}
          place={party.place}
          createTime={party.createTime}
          status={party.status}
          joinNumber={party.joinNumber}
          goalNumber={party.goalNumber}
          partyId={party.partyId}
        />
      ))}
    </Container>
  );
}

export default Parties;
