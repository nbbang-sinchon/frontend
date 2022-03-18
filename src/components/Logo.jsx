import styled from '@emotion/styled';
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { images } from '../assets/assets';
import { COLORS, HOVER_CURSOR_PONTER, SIZES } from '../styles/constants';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;

  ${HOVER_CURSOR_PONTER};
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
  display: ${(props) => (props.isTitleVisible ? 'block' : 'none')};

  @media only screen and (max-width: ${SIZES.MIDDLE_WIDTH}) {
    font-size: 26px;
  }

  @media only screen and (max-width: ${SIZES.SMALL_WIDTH}) {
    font-size: 16px;
  }
`;

function Logo({ isTitleVisible }) {
  return (
    <Link to="/">
      <Container>
        <Image src={images.logo} />
        <Title isTitleVisible={isTitleVisible}>엔빵</Title>
      </Container>
    </Link>
  );
}
Logo.propTypes = {
  isTitleVisible: PropTypes.bool,
};

export default Logo;
