import styled from '@emotion/styled';
import React from 'react';
import { images } from '../assets/assets';
import { COLORS, HOVER_CURSOR_PONTER, SIZES } from '../styles/constants';
import { LOGIN_URLS } from '../config';

function Login() {
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

    ${HOVER_CURSOR_PONTER}

    &:hover {
      opacity: 0.8;
    }

    @media only screen and (max-width: ${SIZES.HEADER_MIDDLE_WIDTH}) {
      height: 40px;
    }
  `;

  return (
    <>
      <Container>
        <InnerContainer>
          <h1>어서 파티를 만들러 가고싶어요!</h1>
          <a href={LOGIN_URLS.KAKAO_LOGIN_URL}>
            <Image src={images.kakao} />
          </a>
          <a href={LOGIN_URLS.NAVER_LOGIN_URL}>
            <Image src={images.naver} />
          </a>
          <a href={LOGIN_URLS.GOOGLE_LOGIN_URL}>
            <Image src={images.google}></Image>
          </a>
        </InnerContainer>
      </Container>
    </>
  );
}

export default Login;
