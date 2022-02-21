import styled from '@emotion/styled';
import React from 'react';
import PropTypes from 'prop-types';
import Party from './Party';
import { SIZES } from '../styles/constants';

const Container = styled.div``;

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

function Parties({ parties }) {
  return (
    <Container>
      <PartyContainer>
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
            id={party.id}
          />
        ))}
      </PartyContainer>
    </Container>
  );
}

Parties.propTypes = {
  parties: PropTypes.arrayOf(PropTypes.object),
};

export default Parties;
