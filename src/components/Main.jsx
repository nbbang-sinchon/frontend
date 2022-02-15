import styled from '@emotion/styled';
import React from 'react';
import PropTypes from 'prop-types';
import { COLORS, SIZES } from '../styles/constants';

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${COLORS.PRIMARY};
`;

const InnerContainer = styled.div`
  padding: 20px;
  width: 100%;
  max-width: ${SIZES.MAIN_MAX_WIDTH};
  box-sizing: border-box;
  background-color: white;

  height: 3000px;
`;

Main.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

function Main(props) {
  return (
    <Container>
      <InnerContainer>{props.children}</InnerContainer>
    </Container>
  );
}

export default Main;
