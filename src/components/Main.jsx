import styled from '@emotion/styled';
import React from 'react';
import PropTypes from 'prop-types';
import { COLORS, SIZES } from '../styles/constants';

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: ${(props) => COLORS[props.background] || COLORS.PRIMARY};
  min-width: ${SIZES.MIN_WIDTH};
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;

  position: relative;
  padding: 20px;
  width: 100%;
  max-width: ${SIZES.MAIN_MAX_WIDTH};
  box-sizing: border-box;
  background-color: white;
`;

function Main({ children, background }) {
  return (
    <Container background={background?.toUpperCase()}>
      <InnerContainer>{children}</InnerContainer>
    </Container>
  );
}

Main.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  background: PropTypes.string,
};

export default Main;
