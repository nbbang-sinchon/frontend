import styled from '@emotion/styled';
import React from 'react';
import PropTypes from 'prop-types';
import Party from './Party';
import { SIZES, PARTY_COLORS } from '../../styles/constants';
import { images } from '../../assets/assets';

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

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

const ErrorContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 20px;
  height: 500px;
`;

const ErrorContent = styled.div`
  padding-right: 40px;
  font-size: 22px;
  font-weight: bold;
  white-space: pre-line;
  z-index: 1;
`;

const Image = styled.img`
  position: absolute;
  height: 500px;
  z-index: 0;
`;

function Parties({ parties, detectorRef }) {
  if (parties.length === 0) {
    return (
      <Container>
        <ErrorContainer>
          <ErrorContent>{`검색 결과가 없습니다!\n조건을 바꿔서 \n다시 시도해보세요`}</ErrorContent>
          <Image src={images.breadBoardError} />
          <div ref={detectorRef} />
        </ErrorContainer>
      </Container>
    );
  }
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
