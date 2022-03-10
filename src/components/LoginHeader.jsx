import styled from '@emotion/styled';
import React from 'react';
import Logo from './Logo';
import { COLORS, SIZES } from '../styles/constants';

const Container = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 10px;
  border-bottom: 2px solid ${COLORS.PRIMARY};
  min-width: ${SIZES.HEADER_MIN_WIDTH};
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 1;
`;

function LoginPageHeader() {
  return (
    <Container>
      <Logo isTitleVisible={false} />
    </Container>
  );
}

export default LoginPageHeader;
