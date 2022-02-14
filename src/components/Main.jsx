import styled from '@emotion/styled';
import React from 'react';
import { COLORS } from '../styles/constants';

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: ${COLORS.PRIMARY};
`;

const InnerContainer = styled.div`
  padding: 20px;
  width: 100%;
  max-width: 800px;
  box-sizing: border-box;
  background-color: white;

  height: 3000px;
`;

function Main(props) {
  return (
    <Container>
      <InnerContainer>{props.children}</InnerContainer>
    </Container>
  );
}

export default Main;
