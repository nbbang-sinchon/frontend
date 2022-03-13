import styled from '@emotion/styled';
import React from 'react';
import PropTypes from 'prop-types';
import MyParty from './MyParty';
import { SIZES, PARTY_COLORS } from '../../styles/constants';

const Container = styled.div``;

const PartyContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-items: center;

  @media only screen and (max-width: ${SIZES.MIDDLE_WIDTH}) {
    justify-content: center;
  }

  > div,
  ::after {
    padding: 10px;
    width: 100%;
    max-width: 360px;
    box-sizing: border-box;

    @media only screen and (min-width: ${SIZES.MIDDLE_WIDTH}) {
      min-width: 250px;
      width: 50%;
    }
  }

  ::after {
    content: '';
  }
`;

function MyParties({ parties }) {
  return (
    <Container>
      <PartyContainer>
        {parties.map((party) => {
          const color = PARTY_COLORS[Math.floor(Math.random() * PARTY_COLORS.length)];
          return (
            <MyParty
              key={party.id}
              title={party.title}
              hashtags={party.hashtags}
              status={party.status}
              joinNumber={party.joinNumber}
              goalNumber={party.goalNumber}
              id={party.id}
              color={color}
              notReadNumber={party.notReadNumber}
            />
          );
        })}
      </PartyContainer>
    </Container>
  );
}

MyParties.propTypes = {
  parties: PropTypes.arrayOf(PropTypes.object),
};

export default MyParties;
