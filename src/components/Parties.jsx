import styled from '@emotion/styled';
import React from 'react';
import PropTypes from 'prop-types';
import Party from './Party';
import { SIZES, PARTY_COLORS } from '../styles/constants';

const Container = styled.div``;

const PartyContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;

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

function Parties({ parties, detectorRef }) {
  return (
    <Container>
      <PartyContainer>
        {parties.map((party) => {
          const color = PARTY_COLORS[Math.floor(Math.random() * PARTY_COLORS.length)];
          return (
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
              color={color}
            />
          );
        })}
        <div ref={detectorRef} />
      </PartyContainer>
    </Container>
  );
}

Parties.propTypes = {
  parties: PropTypes.arrayOf(PropTypes.object),
  detectorRef: PropTypes.object,
};

export default Parties;
