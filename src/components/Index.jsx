import styled from '@emotion/styled';
import React from 'react';
import { Link } from 'react-router-dom';
import { icons } from '../assets/assets';
import { COLORS } from '../styles/constants';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 120px 200px 120px 200px;
  background-color: ${COLORS.BEIGE};

  a {
    flex-grow: 0;
    flex-shrink: 0;
  }
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

const StartBtn = styled.div`
  font-size: 13px;
  font-weight: 400;
  border: 1.5px solid;
  border-radius: 5px;
  color: ${COLORS.PRIMARY};
  background-color: ${COLORS.WHITE};
  padding: 12px 30px;

  flex-grow: 0;
  flex-shrink: 0;

  svg {
    width: 12px;
    margin-left: 2 px;
  }

  &:hover {
    color: ${COLORS.WHITE};
    background-color: ${COLORS.PRIMARY};
    cursor: pointer;

    path {
      fill: ${COLORS.WHITE};
    }
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
      <Link to="/login">
        <StartBtn>
          <div>
            시작하기 <icons.ArrowIcon />
          </div>
        </StartBtn>
      </Link>
    </Container>
  );
}

export default Index;
