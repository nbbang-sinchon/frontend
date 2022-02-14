import styled from '@emotion/styled';
import React from 'react';
import { images } from '../assets/assets';
import { COLORS, SIZES } from '../styles/constants';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    cursor: pointer;
  }
`;

const Image = styled.img`
  height: 60px;

  @media only screen and (max-width: ${SIZES.HEADER_SMALL_WIDTH}) {
    height: 40px;
  }
`;

const Title = styled.div`
  color: ${COLORS.PRIMARY};
  font-size: 36px;

  @media only screen and (max-width: ${SIZES.HEADER_SMALL_WIDTH}) {
    display: none;
  }
`;

function Logo() {
  return (
    <Container>
      <Image src={images.logo} />
      <Title>엔빵</Title>
    </Container>
  );
}

export default Logo;
