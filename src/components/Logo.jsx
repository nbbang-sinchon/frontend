import styled from '@emotion/styled';
import React from 'react';
import { Link } from 'react-router-dom';
import { images } from '../assets/assets';
import { COLORS, SIZES } from '../styles/constants';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;

  &:hover {
    cursor: pointer;
  }
`;

const Image = styled.img`
  height: 60px;

  @media only screen and (max-width: ${SIZES.MIDDLE_WIDTH}) {
    height: 40px;
  }

  @media only screen and (max-width: ${SIZES.SMALL_WIDTH}) {
    height: 30px;
  }
`;

const Title = styled.div`
  color: ${COLORS.PRIMARY};
  font-size: 36px;

  @media only screen and (max-width: ${SIZES.MIDDLE_WIDTH}) {
    font-size: 26px;
  }

  @media only screen and (max-width: ${SIZES.SMALL_WIDTH}) {
    font-size: 16px;
  }
`;

function Logo() {
  return (
    <Link to="/main">
      <Container>
        <Image src={images.logo} />
        <Title>엔빵</Title>
      </Container>
    </Link>
  );
}

export default Logo;
