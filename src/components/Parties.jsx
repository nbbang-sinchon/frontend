import styled from '@emotion/styled';
import React, { useState } from 'react';
import { bool } from 'prop-types';
import Party from './Party';
import dummyParties from '../dummies/dummyParties';
import { SIZES } from '../styles/constants';
import PartyFilter from './PartyFilter';

const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  padding: 10px;

  @media only screen and (min-width: ${SIZES.MIDDLE_WIDTH}) {
    align-items: center;
  }
`;

const PartyContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;

  > div,
  ::after {
    padding: 10px;
    width: 100%;
    max-width: 340px;
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

function Parties({ isFiltered }) {
  const [parties] = useState(dummyParties);

  return (
    <Container>
      {isFiltered && <PartyFilter />}
      <PartyContainer>
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
      </PartyContainer>
    </Container>
  );
}

Parties.propTypes = {
  isFiltered: bool,
};

export default Parties;
