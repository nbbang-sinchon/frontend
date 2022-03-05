import styled from '@emotion/styled';
import React from 'react';
import PropTypes from 'prop-types';
import MyClosedParty from './MyClosedParty';
import { SIZES } from '../styles/constants';

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

function MyClosedParties({ parties }) {
  return (
    <Container>
      <PartyContainer>
        {parties.map((party) => {
          return <MyClosedParty key={party.id} title={party.title} />;
        })}
      </PartyContainer>
    </Container>
  );
}

MyClosedParties.propTypes = {
  parties: PropTypes.arrayOf(PropTypes.object),
};

export default MyClosedParties;
