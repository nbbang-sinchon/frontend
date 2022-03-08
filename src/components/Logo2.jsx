import styled from '@emotion/styled';
import React from 'react';
import { Link } from 'react-router-dom';
import { images } from '../assets/assets';
import { HOVER_CURSOR_PONTER, SIZES } from '../styles/constants';

const Logo2 = () => {
  const Container = styled.div`
    display: flex;
    ${HOVER_CURSOR_PONTER};
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

export default Logo2;
