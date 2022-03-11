import styled from '@emotion/styled';
import React from 'react';
import PropTypes from 'prop-types';
import { COLORS } from '../styles/constants';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: ${(props) => (props.isFullScreen ? '100vw' : '100vh')};
  height: ${(props) => (props.isFullScreen ? '100vh' : '100vh')};
`;

const Loader = styled.div`
  border: 5px solid ${COLORS.LIGHT_GRAY};
  border-top: 5px solid ${COLORS.PRIMARY};
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 1s ease-in-out infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

function Loading({ isFullScreen }) {
  return (
    <Container isFullScreen={isFullScreen}>
      <Loader />
    </Container>
  );
}

Loading.propTypes = {
  isFullScreen: PropTypes.bool,
};

export default Loading;
