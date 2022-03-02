import styled from '@emotion/styled';
import React from 'react';
import PropTypes from 'prop-types';
import { images } from '../assets/assets';
import { SIZES } from '../styles/constants';

const Container = styled.div`
  position: absolute;
  top: 200px;
  right: ${(props) => (props.isShown && '-40px') || '-500px'};
  transition: all ease-in-out 0.3s;
`;

const Image = styled.img`
  width: 500px;

  @media only screen and (max-width: ${SIZES.MIDDLE_WIDTH}) {
    width: 400px;
  }
`;

function BreadBoard({ isShown }) {
  return (
    <Container isShown={isShown}>
      <Image src={images.breadBoard}></Image>
    </Container>
  );
}

BreadBoard.propTypes = {
  isShown: PropTypes.bool,
};

export default BreadBoard;
