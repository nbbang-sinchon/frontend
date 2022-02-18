import styled from '@emotion/styled';
import React from 'react';
import { images } from '../assets/assets';
import { COLORS, SIZES } from '../styles/constants';

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  padding: 150px;
  min-width: ${SIZES.HEADER_MIN_WIDTH};
  position: sticky;
  top: 0;
  background-color: ${COLORS.WHITE};
  font-weight: 700;
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  position: sticky;
  top: 0;
  background-color: ${COLORS.WHITE};
  font-weight: 700;

  h1 {
    font-size: 20px;
    font-weight: 600;
    color: ${COLORS.DARK_GRAY};
    padding-bottom: 20px;
  }
`;

const Image = styled.img`
  height: 50px;
  padding-top: 20px;

  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
  @media only screen and (max-width: ${SIZES.HEADER_MIDDLE_WIDTH}) {
    height: 40px;
  }
`;

function Login() {
  return (
    <>
      <Container>
        <InnerContainer>
          <h1>어서 파티를 만들러 가고싶어요!</h1>
          <Image src={images.kakao} />
          <Image src={images.naver} />
          <Image src={images.google} />
        </InnerContainer>
      </Container>
    </>
  );
}

export default Login;
