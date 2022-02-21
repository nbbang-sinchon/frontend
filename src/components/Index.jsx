import styled from '@emotion/styled';
import React from 'react';
import { Link } from 'react-router-dom';
import { icons } from '../assets/assets';
import { COLORS, SIZES } from '../styles/constants';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 400px;
  width: 100%;
  min-width: ${SIZES.MIN_WIDTH};
  background-color: ${COLORS.BEIGE};

  @media only screen and (max-width: ${SIZES.MIDDLE_WIDTH}) {
    height: 300px;
  }
`;

const InnerContainer = styled.div`
  display: flex;
  align-items: center;

  @media only screen and (max-width: ${SIZES.SMALL_WIDTH}) {
    flex-direction: column;

    a {
      align-self: end;
    }
  }
`;

const WelComeText = styled.div`
  flex-grow: 0;
  flex-shrink: 0;

  h1 {
    font-weight: 500;
    font-size: 40px;

    @media only screen and (max-width: ${SIZES.MIDDLE_WIDTH}) {
      font-size: 32px;
    }
  }

  p {
    font-weight: 300;
    font-size: 10px;
    color: ${COLORS.DARK_GRAY};
    padding: 15px 0px 0px 2px;
  }
`;

const StartBtn = styled.button`
  align-self: end;
  font-size: 14px;
  border: 1.5px solid;
  border-radius: 5px;
  color: ${COLORS.PRIMARY};
  background-color: ${COLORS.WHITE};
  padding: 12px 30px;
  margin-left: 60px;
  margin-top: 30px;
  white-space: nowrap;

  @media only screen and (max-width: ${SIZES.MIDDLE_WIDTH}) {
    font-size: 12px;
    padding: 10px 24px;
    margin-left: 30px;
    margin-top: 10px;
  }

  @media only screen and (max-width: ${SIZES.SMALL_WIDTH}) {
    margin-left: 0;
    margin-top: 30px;
  }

  svg {
    width: 12px;
    margin-left: 4px;
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
      <InnerContainer>
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
        <Link to="/main">
          <StartBtn>
            <span>시작하기</span>
            <icons.ArrowIcon />
          </StartBtn>
        </Link>
      </InnerContainer>
    </Container>
  );
}

export default Index;
