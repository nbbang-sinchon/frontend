import styled from '@emotion/styled';
import React from 'react';
import { Link } from 'react-router-dom';
import { images } from '../assets/assets';
import { COLORS, SIZES } from '../styles/constants';

const Logo = () => {
  const Container = styled.div`
    display: flex;
    &:hover {
      cursor: pointer;
    }
  `;

  const Image = styled.img`
    height: 60px;

    @media only screen and (max-width: ${SIZES.HEADER_MIDDLE_WIDTH}) {
      height: 40px;
    }
  `;

  return (
    <Link to="/main">
      <Container>
        <Image src={images.logo} />
      </Container>
    </Link>
  );
};

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
      <Logo />
    </Container>
  );
}

export default LoginPageHeader;
