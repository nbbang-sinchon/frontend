import styled from '@emotion/styled';
import React from 'react';
import PropTypes from 'prop-types';
import { COLORS, SIZES } from '../styles/constants';

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: ${(props) => (props.isWhite && COLORS.WHITE) || COLORS.PRIMARY};
  min-width: ${SIZES.SMALL_WIDTH};
`;

const InnerContainer = styled.div`
  padding: 20px;
  width: 100%;
  max-width: ${SIZES.MAIN_MAX_WIDTH};
  box-sizing: border-box;
  background-color: white;
`;

function Main({ children, isWhite }) {
  return (
    <Container isWhite={isWhite}>
      <InnerContainer>{children}</InnerContainer>
    </Container>
  );
}

Main.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  isWhite: PropTypes.bool,
};

export default Main;
