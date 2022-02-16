import styled from '@emotion/styled';
import React from 'react';
import { COLORS } from '../styles/constants';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 120px 200px 120px 200px;
  background-color: ${COLORS.BEIGE};
`;

const WelComeText = styled.div`
  padding: 0px 100px 0px 0px;
  flex-grow: 0;
  flex-shrink: 0;

  h1 {
    font-weight: 500;
    font-size: 40px;
  }

  p {
    font-weight: 300;
    font-size: 10px;
    color: ${COLORS.DARK_GRAY};
    padding: 15px 0px 0px 2px;
  }
`;

const StartButton = styled.div`
  font-size: 15px;
  font-weight: 400;
  border: 2px solid;
  border-radius: 5px;
  color: ${COLORS.PRIMARY};
  background-color: ${COLORS.WHITE};
  padding: 12px 25px 12px 25px;

  flex-grow: 0;
  flex-shrink: 0;

  &:hover {
    color: ${COLORS.WHITE};
    background-color: ${COLORS.PRIMARY};
    cursor: pointer;
  }
`;

function Index() {
  return (
    <Container>
      <WelComeText>
        <h1>
          함께 배달 시키고
          <br />
          계산도 편리하게
        </h1>
        <p>
          혼자 배달 시켜먹기에는 양도 많고 배달비도 부담 되시나요?
          <br />
          원하는 파티를 만들거나 찾아보세요!
        </p>
      </WelComeText>
      <StartButton>시작하기&nbsp;&#129042;</StartButton>
    </Container>
  );
}

export default Index;
