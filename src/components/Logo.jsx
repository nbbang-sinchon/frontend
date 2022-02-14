import styled from '@emotion/styled';
import React from 'react';
import { images } from '../assets/assets';
import { COLORS } from '../styles/constants';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  height: 60px;
`;

const Title = styled.div`
  color: ${COLORS.PRIMARY};
  font-size: 36px;
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
